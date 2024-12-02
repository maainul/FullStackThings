# Maven
# What is Maven ?

	1. Build Tools
	2. Project management tool

# Common Problems and activities when we build project

	1. Multiple jars
	2. Dependencies and versions
	3. Project structure
	4. Building, publish and deploying

# Install maven Linux:

	sudo apt-get install maven


# Create a maven project

	mvn archetype:generate

	ls

	// go to application directory

	mvn compile

	mvn package:(package into  jar file, Building jar. Created jar in target folder. it also run junit test cases)

## Running jar/Project :
	
	java -cp target/jar_name.package.className

	java -cp target/firstMavenProject-1.0-SNAPSHOT.jar com.mainul.mavenTest.App
	
	Hello World!



# What maven does for us?

1. We install maven in our dev environment
2. what maven does it download archetype and dependency information from Maven Repository.

ArcheType informatin is about version or project structure and which type of project we want to build.

Dependency Information : list of all jar file which we normally use and other jar we need for the project




Every time maven will run test cases when we compile.
We don't have to manually run test command.


# Again What Maven does for us?

1. Project template : we don't have to create directory or folder maven creates for us and also mave create a simple class for us App.java

2. Build and Package : we are able to compile and package into a jar file.

3.

## 1.Project Template : 
When we execute a command mvn archetype:generate maven will create

1. Folder Structure 
2. pom.xml

and we give some information to the console

1. archetype :What is the kind of project web,javaee,spring,hibernet application
2. Group ID : common group package name
3. Artifact ID : output of our project(war/jar).project name.
4. Version : version number and release version
5. Package : name of the package where we put source code

All information above are store in the pom.xml

## pom.xml

what pom includes :

1. Maven co-ordinates : group id, artifact, package,version etc
2. Metadata : version of java information
3. Build Information : project jar / war
4. Resource and dependencies : dependencies


# MAVEN BUILD

1. Build Lifecyle : Maven has internal life cycle
2. Consists of phases : Build phase have some phases
3. Default behavior of phases 
4. Specify the build phase you need. Previous phases automatically run.

## Some phases 

1. validate phase : check everything is in order.whether configuration is proper or all file is in for compile
2. Compile : It takes all java file and compiles into .class file. If we run Compile automatically validate phase is called because it if before Compile
3. test : where we run test cases java junit test.test automatically knows there is a test case what i am compile.
4. package : .jar / war /eaf file create
5. install : install installs that package/artifact into local maven local repository. publish local repository
6. deploy : 


# Adding Dependency

Add dependency

then run mvn compile

```



## some command :

mvn compile

mvn test

mvn package









# Maven Command


mvn archetype:generate

sudo apt-get install maven

mvn --version

mvn clean install

mvn clean install -Dmaven.surefire.debug

mvn clean install -X

mvn dependency:tree


mvn help:effective-pom


mvn dependency:build-classpath

mvn dependency:analyze



