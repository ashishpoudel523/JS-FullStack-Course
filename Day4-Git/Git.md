Git is the free and open source distributed version control system that's responsible for everything GitHub
related that happens locally on your computer.

# SETUP

Configuring user information used across all local repositories

(1) git config--global user.name “[firstname lastname]”
= set a name that is identifiable for credit when review version history

(2) git config--global user.email “[valid - email]”
= set an email address that will be associated with each history marker

# SETUP AND INIT

Configuring user information, initializing and cloning repositories

(1) git init
= initialize an existing directory as a Git repository

(2) git clone [url]
= retrieve an entire repository from a hosted location via URL

# STAGE & SNAPSHOT

Working with snapshots and the Git staging area

(1) git status
= show modified files in working directory, staged for your next commit

(2) git add [file]
= add a file as it looks now to your next commit (stage)

(3) git reset [file]
= unstage a file while retaining the changes in working directory

(4) git diff
= diff of what is changed but not staged

(5) git diff --staged
= diff of what is staged but not yet committed

(6) git commit -m “[descriptive message]”
commit your staged content as a new commit snapshot

# BRANCH & MERGE

Isolating work in branches, changing context, and integrating changes

(1) git branch
= list your branches. a \* will appear next to the currently active branch

(2) git branch [branch-name]
= create a new branch at the current commit

(3) git checkout
= switch to another branch and check it out into your working directory

(4) git merge [branch]
= merge the specified branch’s history into the current one

(5) git log
= show all commits in the current branch’s history

# INSPECT AND COMPARE

Examining logs, diffs and object information

(1) git log --oneline
= show the commit history for the currently active branch (short form)

# SHARE & UPDATE

Retrieving updates from another repository and updating local repos

(1) git remote add [alias] [url]
Eg.: git remote add origin https://github.com/ap/project1
= add a git URL as an alias

(2) git fetch [alias]
= fetch down all the branches from that Git remote

(3) git merge [alias]/[branch]
= merge a remote branch into your current branch to bring it up to date
= Context: If you are currently on your local main branch, this command takes the new updates from the upstream remote's main branch and weaves them into your work.

(4) git push [alias] [branch]
= Transmit local branch commits to the remote repository branch

(5) git pull
= fetch and merge any commits from the tracking remote branch

# REWRITE HISTORY

Rewriting branches, updating commits and clearing history

(1) git rebase [branch]
= apply any commits of current branch ahead of specified one

(2) git reset --hard [commit]
= clear staging area, rewrite working tree from specified commit

# TEMPORARY COMMITS

Temporarily store modified, tracked files in order to change branches

(1) git stash
= Save modified and staged changes

(2) git stash pop
= unstage changes
