# GIT

git commands

### In order to initialize a git repo - from VScode
```sh
$ git init
$ git remote add origin <https link>
$ git add <path to folder or file to add>
$ git commit -m "message about the task"
$ git push
```

#### To re-do a commit  
In this case it will be necessary to force the push
```sh
$ git commit --amend -m "message"
$ git push -f
```

#### Check info - files to commit & previous commits
```sh
$ git status
$ git log
```

### Branches
#### Check the actual branch
```sh
$ git branch

  develop
  feature/arrays
  feature/bash
  feature/complex-structure
* feature/git
  feature/playground
  feature/space-invaders
  feature/strings
```
This tells us we are in the feature/git branch

#### Move to a branch
```sh
$ git checkout <branch name>
```

#### Create a branch
```sh
$ git branch <name of new branch>
```
We usually do this from the develop branch (which will become the parent branch)