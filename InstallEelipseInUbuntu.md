> sudo snap install eclipse --classic

> sudo gedit eclipse.desktop

Copy and past all 

```
[Desktop Entry]
Name=Eclipse
Type=Application
Exec=/opt/eclipse/eclipse
Terminal=false
Icon=/opt/eclipse/icon.xpm
Comment=Integrated Development Environment
NoDisplay=false
Categories=Development;IDE;
Name[en]=Eclipse
Name[en_US]=Eclipse

```

> sudo desktop-file-install eclipse.desktop
