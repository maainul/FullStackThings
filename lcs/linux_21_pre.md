# Linux Important cmd

## Basic Cmd

List directory
	
		ls

Change dirctory
		cd

Display current working dirctory
		pwd
	
display files data

		cat filename

Display argument to the screen
	
		echo filename

Display online manual
		man commandname
		
Exit current session

		exit

Clear the screen

		clear

Make directory

		mkdir filename

Making Multiple directory

		mkdir -p dir1/dir2/dir3

Remove dirctory
		
		rmdir dir1

Remove multiple directory

		rm -rf dir1

Go the the previous directory

		cd -

## List Directory CMD

list directory
		ls -l

list directory with all files

		ls -l -a (ls -la)

list directory with filetype

		ls -laF (F = FileType)

list files with time

		ls -t (list files by time)

list files with files and reverse order

		ls -r (Reverse order)

list long with files reverse sort time

		ls -latr (long listing,all files,reverse, sort by time)

list with directory
		
		ls -d

list files with color

		ls --color

list Music files name

		ls -l Music

list Music directory Music

		ls -ld Music

Tree command to list of files
		
		tree -d

Tree command with color

		tree -c

## Finding Files

	    	find .

	    	find

	    	find -iname anyname

	    	find /sbin -name makedif

## Find files 10 days old but less than 30 than pwd

    	find . -mtime +10 -mtime -13

    	find . -name s* -ls

    	find . -size +1kb

    	find . -type d -newer file.txt

## File Display CMD / Viewing Files

1. cat
2. more
3. less
4. head
5. tail

Show file info

		cat App.js

See first 10 line

		head App.js

See first 2 line

		head -2 App.js

See last 10 line

		tail App.js

See last 2 line

		tail -2 App.js

See page wise

		more App.js

see line by line
		
		less App.js

## Copy files

    	cp src dest

    	cp src_fil1 src_file2 dest_dir

    	cp - i file1 file2

    	cp -r dir1 dir2

## Moving and rename files

    	mv src dest (rename dirctory src to dest)

    	mv -i src dst

## Sorting Data

    	sort more.txt

    	sort -u more.txt

## Create Directory and Files

    	cp

    	touch

    	vi

## CMDS

    	mv test newfilename

    	touch hello.txt

    	touch hello1.txt hello2.txt

    	rm -r docker/

    	vi file1.txt

## WildCards

    	* - zero or more character

    	? - a single character

    	[] - a range of characters

## create files using wildcards

    	touch

    	rm abc*

    	touch abcd{1..9}-xyz

    	ls -l abc*

    	rm abcd*

    	ls -l ?bcd*

    	ls -l ?[cd]*

## Linux file types

    	- --> regular file

    	l --> link

    	c --> special file

    	s --> socket

    	p --> named pipe

    	b--> block device

## Permissions

Types of Permissions:

1.  r - read
2.  w - write
3.  x - running a program (executable)

rwx

Types of permission group

1.  u - user
2.  g- group
3.  o - other

Command to change permisson

    	chmod

    	chmod ugo+r FILE

change Permission

		chmod g+w sales.txt (change sales.txt to write permission)

		chmod g-w sales.txt (remove permission)

		chmod g+wx sales.txt (multiple permissions)

		chmod u+rwx,g-x sales.txt

		chmod a=r sales.txt

		chmod u=rwx,g=rw o= sales.txt (after o= no value means no permission to other)

		chmod a-r file.txt (remove read permission for everyone)

5.  Numeric Based Permissions

		chmod ugo+ FILE

or

		chmod 444 FILE

## Permission list

![chmod-Notation-1](https://user-images.githubusercontent.com/85335954/133926158-8380423e-ac36-4213-ac4f-5cfdfe08cf03.png)

If type

    chmod 644 files.txt

![chmod-octal-format-explained](https://user-images.githubusercontent.com/85335954/133926227-b8743324-6b8e-4a89-94c5-d4d558c2f900.jpg)

        chmod 400 my-cat (dr--------)

        chmod 500 my-cat (dr-x------)

## File Ownership

1.  chown
2.  chgrp

		chown root lisa

		chgrp root lisa

## Access Control List(ACL) : Provides an additional,more flexible permission mechanism for file systems

user is not a member of group created by you but still you want to give some read or write access,how can you do it without making user a member of group.

Add permission to the user

		setfacl -m u:user:rwx /path/to/file

Add permission to the group

		setfacl -m g:group:rw /path/to/file

To remove specific entry

		setfacl -x u:user /path/to/file

To remove all entries

		setfacl -b path/to/file

Show the file permission of a file

		getfacl filename

# Not Complete--------------------------X X X

## Help CMD

    	whatis

    	help

    	man

    	whatis ls

    	whatis cd

    	whatis pwd

## Adding Text to files

3 way to add text to a file

1.  vi
2.  Redirect command output
3.  echo > or >>

Create file and write line >

        echo "it is raining outside" > rain.txt

Append line in the second line >>

        echo "it is raining again second line" >> rain.txt

## Standard Output with tee

Read data

		echo "mainul hasan"

Create File with some text

		echo "mainul" > file.txt

Create file and write data and show lines

		echo "this is me" | tee file2.txt

append line in the existing file

		echo "This is second line" | tee -a file2.txt

		cat file2.txt

Check how many character in a file

		wc -c file2.txt

## Pipes : Connects two or many commands

		cd /etc

show files and one page at a time

		ls -ltr | more

Show last lines of output

		ls -ltr | tail -1

## Read and write files

		cat file1.txt > file2.txt ---> read file1 and write data file2

		cat file1.txt file2.txt --> read multiple files

		cat file1.txt file2.txt > combined.txt ---> read two file and write into 1

		echo hello file1.txt

		ls -l /etc > files.txt

		cat files.txt

## Filters/ Text Processors Commands

1. cut
2. awk
3. greap and egrep
4. sort
5. uniq
6. wc

## Cut - Text Processors commands

		cut filename

		cut --version

		cut -c1 filename    = List one character

		cut -c1,2,4 filename = pick and chose character

		cut -c1-3,6-8 filename = list range of character
		
		cut -b1-3 filename    = byte size file
		
		cut -d: -f 6 /etc/passwd =  6th column separated by

		ls -l | cut -c2-4 = Only print user permissions of files/dir


## AWK : utility/language designed for data extraction.Most of the time it is used to extract fields from a file from an output.

		
## Grep : Global Regular Ecpression Print : Search features : Search Specific keyword in a file 


		grep --version

		grep --help

		grep keyword file

Upper and lower case both

		grep -i keyword file

count keyword

		grep -c keyword file

number of lines

		grep -n keyword file

except this keyword

		grep -v keyword file


list files and search desktop

		ls -l | grep Desktop

Multiple files

		egrep -i "keyword1|keyword2" file

## Sort/ uniq - Text Processors Commands

Help or version

		sort --version OR sort --help

Sort file
		
		sort file
		
Reverse sort file 

		sort -r file
		
Sort second column 
		
		sort -k2 file
		
## Uniq command

		unique file
	
Sort file and count 

		sort file | uniq -c

Sort and find duplicate 
	
		sort file | uniq -d
	
## WC - Text Processors Commands

version check
	
		wc --version or wc --help
	
		wc file

count line 
	
		wc -l file

count word 

		wc -w file

count character

		wc --b file

count directory and files in a directory

		ls -l | wc -l
		
list of directory and
	
		ls -l | grep drw

directory count		

		ls -l | grep drw | wc -l


## Compare Two files

1. diff (Line by line)
2. cmp (Byte by Byte)

		cmp file1 file2
		
		diff file1 file2
		

## Compress and UnComporss Files

1. tar 
2. gzip
3. gzip -d OR gunzip (uncompress)


Zip tar file

		tar cvf mainul.tar /home .

Unzip tar file
	
		tar xvf mainul.tar
	
zip file filename.tar.zip
	
		gzip mainul.tar

Unzip file filename.tar.zip
	
		gzip -d mainul.tar.gz
	
## Truncate File Size (truncate)

	truncate -s 10 filename
	
## Combinig and Splitting files
	
- Multiple files can be combined into one and
- One file can be split into multiple files

	cat file1 file2 > file3
	
	split file3
	
	split -l 300 file.txt sep 
	
	split -l 200 filename sep
	
- Split file.txt into 300 lines per file and output to childfilea, childfileb and childfilec
 
	
# System Administration

	
## Linux File Editor

- vi  - visual editor
- ed  - standrd line editor
- ex  - Extednded line editor
- emacs - A full screen editor
- pico - Beginner's editor
- vim - Advance version of vi


## Introduction to vi
	- insert and deleting
	- replacing text
	- moving around text file
	- finding and substituting strings
	- cutting and pasting text

Most common keys:

		i = insert
		  
		Esc - Escape out of any mode
		
		r - replace
		
		d - delete
		
		:q! - quite without saving
		
		:wq! - quite
		
		k = up
		
		j = down
		
		l = right
		
		h = left
		
		w = right 1 word

		b = left 1 word

		^ = beginning of the line

		$ = end of the line

		i = insert cursor position

		a = append after the cursor position

		A = appendt at the end of the line

		:w = write

		:w! = force write

		:q = quite

		:q! = force + quite

		:wq! = write and quite

		:x = same as :wq

		x = delete a character

		dw = delete word

		dd = delete a line

		D = delete from current position


## sed Command

- Replace a string in a file with a newString
- Find and delete line
- Remove empty lines
- Remove the first of n lines in a file
- To Replace tabs with spaces
- show defined lines from a file
- Substitute within vi editor


	
- Replace a string in a file with a newString not permanently
		
		sed 's/Bd/Bangladesh/g' sen.txt

- Replace a string in a file with a newString not permanently with existing file
		
		sed -i 's/Bd/Bangladesh/g' sen.txt
		
		
- Find and delete line
	
		sed '/BD/d' seni.txt
		
- Remove empty lines
	
		sed -i '/^$/d' sein.txt
		
- Remove the first of n lines in a file
	
		sed -i '1d' sein.txt
		

- To Replace tabs with spaces
	
		sed 's/\t/ /g' sein.txt
		
		sed 's/ /\t/g' sein.txt
		
- show defined lines from a file
		
		sed -n 12,18p sein.txt (FROM 12 to 18 no character)
		
		sed 12,18d sein.txt

		sed G sein.txt
		
		sed '/Seinfied/S/g' sein.txt (Replace Seinfied with S)
		
		sed '8!s/Seinfied/S/g' sein.txt (Replace Seinfied with S except 8 no line)
		
## User Accont Management

		useradd
		
		groupadd
		
		userdel
		
		groupdel
		
		usermod
		

	Files
	
		- /etc/passwd
		
		- /etc/group
		
		- /etc/shadow
		

- Create user

		useradd spiderman
	
- check user created 

		id spiderman
		
		cd /home/

		ls -l

- Group add

		groupadd superheros
		
		cat /etc/group
		
- delete user
		
		userdel 
		
		cd /home
		
		ls -l

- delete home directory of spiderman

		userdel -r spiderman
		
		ls -ltr

- delete group

		groupadd nonewGroup
		
		cat /etc/group
		
		groupdel nonewGroup
		
- we can add usergroup in multiple group
		
		useradd spiderman
		
		ls -ltr
		
		usermod -G superheroes spiderman
		
		cat /etc/group
		
		grep spiderman /etc/group
		
		chgrp -R superheroes spiderman
		
## Switch user

		su - username

		sudo command
		
		visudo
		
				
	       - /etc/sudoers
	       
- go to spiderman account

		su -spiderman

- become root
		su -

## Monitor Users

- who
- last
- w
- finger
- id

		who
		
		hostname
		
		last | awk '{print $1}'
		
		last | awk '{print $1}' | sort | uniq
		
		w
		
		id
		
		fin  ger
		
		
## Talking to User

		users
		
		wall
		
		write username
		
## Difference between Active directory, LDAP, IBM, WinBind,OpenLDAP etc

- Active Directory = Microsoft
- IDM = Identity Manager
- WinBind = Used in linux to communicate with windows (samba)
- OpenLDAP = Open Source (Lightwate Directory Access Protocol)
- IBM = IBM Dirctory Server
- JumpCLoud
- LDAP = Lightwate Directory Access Protocol

## System Utility Commands

- date
- uptime
- hostname
- uname
- which
- cal
- bc
- uname -a

- cal 9 1996


## Processes and Jobs

- Application = Service
- Script = Shell scripts or commands are list of instructions eg . adduser, cd,pwd
- Process = Service --> Process1, Process2
- Daemon = Run untill interrupted
- Threads = Service --> Process --> Thread1 --> thread1, thread2, thread3
- Job = Job or Workorder = Run a service or process at a schedule time

## Process and services commands

- systemctl or service
- ps
- top
- kill
- crontab
- at 

		systemctl restart ntpd
		
		ps -ef
		
		systemctl status ntpd
		
		ps -ef | grep ntpd
		
		systemctl enable ntpd
		
		top ---> gives you number of total task
		
		kill 12027 (Process Id)
		
		
## Additional Corn Jobs

	- Hourly
	- Daily
	- Weekly
	- Monthly

- All the above corns are setup in

	- /etc/cron 
	
- The timing for each are set in 
	- /ect/anacrontab -- except hourly

		cat /etc/anacrontab
		
## Process Management 
	
- Background = Ctrl-z
- Foreground = fg
- Run process even after exit = nohup process &
	- oR = nohup process > dev/null 2 > &1 &

- Kill a process by name = pkill
- process priority = nice( nice -n 5 process)
- process monitor = top

		ps -ef
		
		top
		
		ps -ef | grep sleep
		
## System Monitoring

- top
- df
- dmesg
- iostart 1
- netstat
- free
- cat /proc/cpuinfo
- cat /proc/meminfo
	
	
df = disk partition information

		df
		
		netstat 
		
		free
		
		cat 
		
		cat /proc/cpuinfo  ---> show cpu information
		
		cat /proc/meminfo  ---> 
		
## Log monitoring

		Log directory = /var/log
		
- boot
- chronyd = NTP
- cron
- maillog
- secure
- messages
- httpd

		cd /var/log
		
		ls -l
		
		cd /var/log
		
		sudo more boot.log ---> show log 
			
		ls -l boot.log
		
		chronyd
		
		ll | more 
		
		cd /var/log
		
		more messages

## System Monitor

		shutdown
		
		init 0-6
		
		reboot
		
		halt
		
## Changing System Hostname

- hostnamectl - set-hostname newhostname
- vesion 7 = Edit /etc/hostname
- verion 6 = Edit /etc/sysconfig/network

		hostname
		
- change hostname : First become root

		su -
		
		hostname 
		
		cat /etc/hostname
		
		hostnamectl set-hostname mynewhostname
		
		cat /etc/hostname
		
		hostname
		
		reboot
		
## Finding Sytem Information
	
- cat /etc/redhat-release

- uname -a
			
- dmidecode 

- Show linux info

		uname -a

- all info.
		
		dmidecode | more



## System Architecture


	arch

	

























