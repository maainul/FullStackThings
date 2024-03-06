#### See this video : https://www.youtube.com/watch?v=XxB6asfgKOc

> sudo lshw -class network

> cd /etc/pm/sleep.d

> sudo touch config

> sudo gedit config

add this line into the editior and save it.

SUSPEND_MODULES= "82545EM"

> echo "options 82545EM fwlps=N" | sudo tee /etc/modprobe.d/82545EM.conf 
