# Linux Important cmd

1. List directory
	
		ls

2. Change dirctory
	
		cd

3. Display current working dirctory
	
		pwd

4. display files data

		cat filename

5. Display argument to the screen
	
		echo filename

6. Display online manual
	
		man commandname

7. Exit current session
	
		exit

8. Clear the screen
	
		clear

9. Make directory 
	
		mkdir filename
	
10. Making Multiple directory

		mkdir -p dir1/dir2/dir3

11. Remove dirctory
	
		rmdir dir1

12. Remove multiple directory

		rm -rf dir1

13. Go the the previous directory
	
		cd -

14. list directory 
	
		ls -l
	
		ls -l -a (ls -la)
	
		ls -laF (F = FileType)
		
		ls -t (list files by time)
		
		ls -r (Reverse order)
		
		ls -latr (long listing,all files,reverse, sort by time)
		
		ls -d
		
		ls -dF
		
		ls --color
		
		ls -l Music
		
		ls -ld Music
		
15. Tree command to list of files
	
		tree -d
		
		tree -c
		
## Permissions

16. change Permission		
		
		chmod g+w sales.txt (change sales.txt to write permission)
		
		chmod g-w sales.txt (remove permission)

		chmod g+wx sales.txt (multiple permissions)
		
		chmod u+rwx,g-x sales.txt

		chmod a=r sales.txt

		chmod u=rwx,g=rw o= sales.txt (after = no value means no permission)

17. Numeric Based Permissions
	
		chmod 400 my-cat (dr--------)
		
		chmod 500 my-cat (dr-x------)
	

18. File Creation Mask (777 - directories, 666 - files)
		
022,002,077,007

incomplete ----(vid 7,8) 
		
19. Finding Files
	
		find .
		
		find

		find -iname anyname

		find /sbin -name makedif

20. Find files 10 days old but less than 30 than pwd

		find . -mtime +10 -mtime -13
		
		find . -name s* -ls
		
		find . -size +1kb

		find . -type d -newer file.txt

		
## Viewing Files

21. Show file info

		cat App.js

22. See first 10 line
	
		head App.js

23. See first 2 line

		head -2 App.js
	
24. See last 10 line
	
		tail App.js

25. See last 2 line

		tail -2 App.js

26. See page wise
	
		more App.js
	
27. see line by line	
	
		less App.js


					
## Vi editior

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

## Removing files

28. Removing files

		rm file (remove file)

		rm -r dir (remove dir)

		rm -f file (force remove)


29. Copy files

		cp src dest

		cp src_fil1 src_file2 dest_dir

		cp - i file1 file2

		cp -r dir1 dir2

30. Moving and rename files

		mv src dest (rename dirctory src to dest)

		mv -i src dst

31. Sorting Data

		sort more.txt

		sort -u more.txt


32. tar

		c = create

		x = extract

		t = display

		v = verbose

		z = compression

		f = use this file

		tar cf tps.tar tpsreport

		tar tf tps.tar

		cd/tmp

		tar xt /home/mainul/tps.tar
		
		tar xtv /home/mainul/tps.tar

33. Disk Usage

	du

	du -k

	du -h

	12 video

	