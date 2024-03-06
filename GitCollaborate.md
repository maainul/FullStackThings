To collaborate with others on your GitHub repository and allow them to contribute code, you can follow these steps:

Share the Repository URL:

Share the URL of your GitHub repository (https://github.com/maainul/FullStackThings.git) with the team members.

Invite Collaborators:

To add team members as collaborators, follow these steps:

Navigate to your repository on GitHub.
Click on the "Settings" tab.
In the left sidebar, click on "Collaborators."
Type the GitHub usernames or email addresses of your team members and click "Add collaborator."
Clone the Repository:
Team members need to clone the repository to their local machines using the following command:

```
git clone https://github.com/maainul/FullStackThings.git
```
Create Branches:
It's a good practice for each team member to work on a separate branch to avoid conflicts. Each member can create a new branch using:

```
git checkout -b feature-branch-name
```
Make Changes:

Team members can make their code changes within their branches.

Commit Changes:
After making changes, commit them using:

```
git add .
git commit -m "Descriptive commit message"
```

Push Changes:
Push the changes to the remote repository:

```
git push origin feature-branch-name
```
Create Pull Requests:
Once the changes are pushed, team members can create pull requests from their branches on GitHub. This allows you to review and merge the changes.

Review and Merge:
As the repository owner, you can review the pull requests, provide feedback, and eventually merge them into the main branch.

By following these steps, you can collaborate with your team members on the same GitHub repository, and each member can contribute code without directly pushing to the main branch.
