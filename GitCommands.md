# GIT Commands

1. GIt Configuration



## 1.Git configuration

Set the name:
	
	git config --global user.name "User name"

Set the email:
	
	git config --global user.email "test@gmail.com"

Set the default editor:
	
	git config --global core.editor Vim

Check the setting:
	
	git config -list

Set up an alias for each command:
	
	git config --global alias.co checkout
	
	git config --global alias.br branch
	
	git config --global alias.ci commit
	
	git config --global alias.st status


#Adding an existing project to GitHub using the command line

Simple steps to add existing project to Github.

## 1. Create a new repository on GitHub.
In Terminal, change the current working directory to your local project.

##2. Initialize the local directory as a Git repository.

	git init
	
Add the files in your new local repository. This stages them for the first commit.

	git add .

or:
	
	git add --all

Commit the files that you've staged in your local repository.

	git commit -m 'First commit'


Copy remote repository URL field from your GitHub repository, in the right sidebar, copy the remote repository URL.

In Terminal, add the URL for the remote repository where your local repostory will be pushed.

	git remote add origin <remote repository URL>
	
Sets the new remote:
	
	git remote -v

Push the changes in your local repository to GitHub.

	git push origin master

Pushes the changes in your local repository up to the remote repository you specified as the origin




# Stahing and Commits

Starting a project

	git init

Create a local repository:
	
	git init

	git init NewDirectory

Git clone Make a local copy of the server repository.

	git clone “url// of repository”

3. Local changes

	git add

Add a file to staging (Index) area:

	git add Filename

Add all files of a repo to staging (Index) area:

	git add -A
	
	git add .

	git add *.java

Git commit
Record or snapshots the file permanently in the version history with a message.

	git commit -m " Commit Message"

	git commit -am " Commit Message"

	git commit

4. Track changes
	
	git diff

Track the changes that have not been staged: $ git diff

Track the changes that have staged but not committed:
	
	git diff --staged

Track the changes after committing a file:
	
	git diff HEAD

Track the changes between two commits:
	
	git diff Git Diff Branches:
	
	git diff < branch 2>

Git status

Display the state of the working directory and the staging area.
  
	git status

Git show Shows objects:
 	
	git show

5. Commit History
Git log
Display the most recent commits and the status of the head:
	
	git log

Display the output as one commit per line:
	
	$ git log -oneline

Displays the files that have been modified:
	
	$ git log -stat

Display the modified files with location:

	$ git log -p

Git blame
Display the modification on each line of a file:
	
	git blame <file name>

6. Ignoring files
	
	.gitignore

	git add .gitignore  
	
	git commit -m "ignored directory created."  

Specify intentionally untracked files that Git should ignore. Create .gitignore:
	
	$ touch .gitignore List the ignored files:

	$ git ls-files -i --exclude-standard



# Git TAGS - What | Why | When | How

-------------------------------
1. What are tags / releases
2. Why should i create TAGs
3. When to create TAGs
4. How to create TAGs in git
     create | show | publish | delete

Step 1: Checkout the branch where you want to create the tag

	git checkout "branch name"

example : git checkout master
________________________________________________________

Step 2: Create tag with some name

	git tag "tag name"

example : git tag v1.0
	
	git tag -a v1.0 -m "ver 1 of .."  (to create annotated tags) 
________________________________________________________

Step 3: Display or Show tags

	git tag
	
	git show v1.0
	
	git tag -l “v1.*”
________________________________________________________
Step 4: Push tags to remote

	git push origin v1.0
	
	git push origin --tags
	
	git push --tags 
	(to push all tags at once)
________________________________________________________
Step 5: Delete tags (if required only)

to delete tags from local :
	
	git tag -d v1.0
	
	git tag --delete v1.0

to delete tags from remote :
	
	git push origin -d v1.0
	
	git push origin --delete v1.0
	
	git push origin :v1.0

to delete multiple tags at once:
	
	git tag -d v1.0 v1.1 (local)
	
	git push origin -d v1.0 v1.1 (remote) 


# Git Checkout/ Branch Command

show branch
	
	git branch

Create branch
	
	git branch branch_name

List branch 
	
	git branch --list

	or 

	git branch

Delete branch
	
	git branch -d branch_name

	git branch -D branch_name

Delete branch

	git push origin -delete branch_name

Switch branch
	
	git checkout branchName

Create and change branch
	
	git checkout -b "brancName"

Rename branch
	
	git branch -m old_name new_name

Merge branch
	
	git merge branch_name

Checkout remote branch
	
	git fetch --all

# Git revert
	
	git revert

	git revert <commit-ish>

	git revert -e <commit-ish>

	git revert -n <commit-ish>

	git log

	git merge 

	git log

	git revert <commit reference> -m 1

# Git reset

	git add .

	git status

	git log

	git reset --hard

	git status

	git add .

	git reset --mixed

	git reset

	git reset --soft<commit-sha>

	git log

	git reset --soft <commit-ish>

	git reset <option><commit-sha>

# Git rm

	git rm <fileName>

	git add newFile2.txt

	git commit -m "commit message"

	git rm --cached<file name>

	git rm --cached<file name>

	git status

	git reset HEAD

	git reset --hard

	git checkout

