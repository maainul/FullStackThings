## Change Execution Policy
   
        Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

If this error happend
```
netlify : File C:\Users\Md. Mainul Hasan\AppData\Roaming\npm\netlify.ps1 cannot be loaded because running scripts is
disabled on this system. For more information, see about_Execution_Policies at
https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ netlify init
+ ~~~~~~~
+ CategoryInfo          : SecurityError: (:) [], PSSecurityException
+ FullyQualifiedErrorId : UnauthorizedAccess
```

1. Install Netlify cli

        npm install -g netlify-cli

2. Netlify Login 

        netlify login

3. Deploy to Netlify

        netlify init

4. Deploy Command

        netlify deploy --prod





