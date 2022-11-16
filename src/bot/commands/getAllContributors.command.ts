import { TransformPipe } from '@discord-nestjs/common';
import {
  Command,
  DiscordTransformedCommand,
  Payload,
  TransformedCommandExecutionContext,
  UsePipes,
} from '@discord-nestjs/core';
import { ContributorsDto } from '../dto/contributors.dto';
import { Octokit } from '@octokit/rest';
const octokit = new Octokit();

/**
 * This command will return all contributors of the WebXDAO organization
 * provided by the GitHub API.
 *
 * problem: the API is limited to 60 requests per hour... So we need to cache the result/save it into a DB.
 *
 * todo: Allowing the user to fetch one time per day. And save the response into
 * the DB with a Date.now() timestamp.
 * => If already present for the current day, return the cached response.
 */
@Command({
  name: 'getcontributors',
  description: 'Get all WebXDAO contributors',
})
@UsePipes(TransformPipe)
export class ContributorsCommand
  implements DiscordTransformedCommand<ContributorsDto>
{
  handler(
    @Payload() dto: ContributorsDto,
    { interaction }: TransformedCommandExecutionContext,
  ): string {
    const contributorsList: any[] = [];

    octokit.rest.repos
      .listForOrg({
        org: 'webxdao',
        type: 'public',
      })
      .then(({ data }) => {
        const repos = data.map((repo) => repo);
        repos.forEach((repos) => {
          octokit.rest.repos
            .listContributors({
              owner: 'webxdao',
              repo: repos.name,
            })
            .then(({ data }) => {
              const contributors = data.map((contributor) => contributor);
              contributorsList.push(contributors);
            });
        });
      });

    const contributorsN = contributorsList
      .flat()
      .map((contributor) => contributor.login);

    return `All contributors are ${contributorsN}.`;
  }
}
