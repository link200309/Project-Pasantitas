---
description: Group changes into semantic commits and push
---

Group all current changes into meaningful semantic commits and push the current branch.

Optional context for commit messages:

$ARGUMENTS

Rules:

- First inspect the full repository state:
  - `git status --short`
  - `git diff --stat`
  - `git diff`
  - `git log --oneline -10`
- Inspect both tracked and untracked files when determining the changes.
- Identify related file groups by intent: feature, fix, refactor, tests, docs, chore, release, or config.
- Create multiple commits when there are independent changes. Do not mix unrelated changes in the same commit.
- If `$ARGUMENTS` is not empty, use it as context to adjust commit messages, but do not force that text if it does not accurately describe the changes.
- Use clear, semantic, concise commit messages that follow the repository's recent style.
- Before committing, check for sensitive or suspicious files, including `.env` files, tokens, credentials, private keys, and secrets.
- If actual secrets or sensitive credentials are found, stop and ask before committing.
- Include new, modified, and deleted files that belong to each group.
- Do not revert existing changes.
- Do not use `--no-verify`.
- Do not amend commits.
- Do not force push.

Flow:

1. Inspect the repository state and determine the commit groups.
2. Show the proposed commit plan with the files included in each commit.
3. If the grouping has real ambiguity that cannot be resolved from the repository context, stop and ask for clarification. Otherwise, continue automatically.
4. For each group:
   - Add only the files for that group with `git add <files>`.
   - Create the commit with a semantic message.
5. Once all commits have been created, run:
   - `git push`
6. If `git push` fails, do not force push, amend commits, or otherwise rewrite history. Report the error and stop.
7. When finished, summarize the commits created and the branch that was pushed.



