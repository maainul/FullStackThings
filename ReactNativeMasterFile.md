# Create APK

        eas login

        eas whoami

Open project with vscode open terminal then type

         eas build:configure

It will create eas.json file.Update Like this
```json
{
  "cli": {
    "version": ">= 5.9.1"
  },
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

Build Command :

        eas build -p android --profile preview

It will take time (10- 15 min)

then press no

it will provide link :

https://expo.dev/artifacts/eas/v17NbF5pmwwuExuMkg6bHj.apk

Go to Expo and paste this link



# First Time Create Android App !

## Create React Native App Using Expo

        npx create-expo-add first-app

## Run App :

        npm start


## Installing Dependencies :

 1. Navigation :

        npm install @react-navigation/native-stack

         npm install @react-navigation/stack

 2. 



## Component And Styling :

```js
<View>
      <Text>Test</Text>
</View>
```

### Add Inline Style :

```js
 <Text style={{color:"red"}}>Test 2</Text>
```
### Object Styling

For That Import StyleSheet from 'react-native'

```js
// Const style
const TestStyle = StyleSheet.create({
    h1: {
        fontSize: 30,
        color: "green"
    }
})

<Text style={TestStyle.h1}>Test Components Object Style. This is Learning Project</Text>
```

## Styling Input Box and Container  :
```js
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'

const Task = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputBox} placeholder='Add your tasks' />
                <Button title='Add Task' />
            </View>
            <View>
                <Text style={styles.border}></Text>
                <Text style={styles.textTitle}>Your Task : </Text>
            </View>
        </View>
    )
}

// Style
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    inputBox: {
        width: '75%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        paddingLeft: 15
    },
    textTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'blue'
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
})
export default Task
```
### Result :
![Screenshot_2023-11-23-08-59-24-709_host exp exponent](https://github.com/maainul/FullStackThings/assets/37740006/25552ad4-fe00-4a61-86fc-66c39b6de3a7)


## Use State and Submit Form Data OnPress and Scroll data :

```js
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Task = () => {

    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    // handle input Value
    const handleInputValue = (inputTask) => {
        setTask(inputTask);

    }

    // add tasks button
    const handleAddTaskButton = () => {
        setTaskList((prevTask) => (
            [...prevTask, task]
        ))
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={handleInputValue} style={styles.inputBox} placeholder='Add your tasks' />
                <Button onPress={handleAddTaskButton} title='Add Task' />
            </View>
            <View>
                <Text style={styles.border}></Text>
                <Text style={styles.textTitle}>Your Task : </Text>
                <ScrollView>

                    <View>
                        {taskList.map((taskItem, index) => (
                            <Text style={styles.taskItem} key={index} >{taskItem}</Text>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

// Style
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    inputBox: {
        width: '75%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        paddingLeft: 15
    },
    textTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'blue',
        marginBottom: 10
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    taskItem: {
        margin: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "green",
        color: "white",

    }
})
export default Task

```
### It Will be Like This

![Screenshot_2023-11-23-23-14-32-236_host exp exponent](https://github.com/maainul/FullStackThings/assets/37740006/9944942d-ea8e-4422-9586-bd0e7a1045b7)


## Problems of ScroolView :

It will show all the value that we have. suppose we have 10000000 data. it will show.these amount of data in one page.  It will take time and performance will be very low


## Use FlatView to Solve these problem :

```js
import { View, Text, TextInput, Button, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'

const Task = () => {

    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    // handle input Value
    const handleInputValue = (inputTask) => {
        setTask(inputTask);

    }

    // add tasks button
    const handleAddTaskButton = () => {
        setTaskList((prevTask) => (
            [...prevTask, task]
        ))
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={handleInputValue} style={styles.inputBox} placeholder='Add your tasks' />
                <Button onPress={handleAddTaskButton} title='Add Task' />
            </View>
            <View>
                <Text style={styles.border}></Text>
                <Text style={styles.textTitle}>Your Task : </Text>
                {/* <ScrollView>
                    <View>
                        {taskList.map((taskItem, index) => (
                            <Text style={styles.taskItem} key={index} >{taskItem}</Text>
                        ))}
                    </View>
                </ScrollView> */}

                <FlatList
                    data={taskList}
                    renderItem={({ item, index }) => {
                        return (
                            <Text style={styles.taskItem} > {index + 1}  : {item}</Text>
                        )
                    }}
                    keyExtractor={(item, index) => {
                        return index
                    }}

                />

            </View>
        </View>
    )
}

// Style
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    inputBox: {
        width: '75%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        paddingLeft: 15
    },
    textTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'blue',
        marginBottom: 10
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    taskItem: {
        margin: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "green",
        color: "white",

    }
})
export default Task

```

## Let's Make Our Code Reuseable :

### 1. Create new functions in components/TaskItem.js

### TaskItem.js

```js
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TaskItem = ({ index, item }) => {
    return (
        <View>
            <Text style={styles.taskItem} > {index + 1}  : {item}</Text>
        </View>
    )
}


// Style
const styles = StyleSheet.create({
    taskItem: {
        margin: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "green",
        color: "white",

    }
})


export default TaskItem
```

### Task.js
```js
import { View, Text, TextInput, Button, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import TaskItem from './components/TaskItem';

const Task = () => {

    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    // handle input Value
    const handleInputValue = (inputTask) => {
        setTask(inputTask);

    }

    // add tasks button
    const handleAddTaskButton = () => {
        setTaskList((prevTask) => (
            [...prevTask, task]
        ))
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={handleInputValue} style={styles.inputBox} placeholder='Add your tasks' />
                <Button onPress={handleAddTaskButton} title='Add Task' />
            </View>
            <View>
                <Text style={styles.border}></Text>
                <Text style={styles.textTitle}>Your Task : </Text>
            </View>
            <FlatList
                data={taskList}
                renderItem={({ item, index }) => <TaskItem item={item} index={index} />}
                keyExtractor={(item, index) => {
                    return index
                }}
            />
        </View>
    )
}

// Style
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    inputBox: {
        width: '75%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        paddingLeft: 15
    },
    textTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'blue',
        marginBottom: 10
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
})
export default Task
```

## Validation and Add Task Reusable Component:
```js
import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import TaskItem from './components/TaskItem';
import AddTask from './components/AddTask';

const Task = () => {

    const [taskList, setTaskList] = useState([]);

    // add tasks button
    const handleAddTaskButton = (task) => {
        setTaskList((prevTask) => (
            [...prevTask, task]
        ))
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <AddTask
                    handleAddTaskButton={handleAddTaskButton}
                />
            </View>
            <View>
                <Text style={styles.border}></Text>
                {taskList.length > 0 ? (
                    <Text style={styles.textTitle}>Your Task : </Text>
                ) : (
                    <Text style={styles.textTitle}>No task availabe</Text>
                )}
            </View>
            <FlatList
                data={taskList}
                renderItem={({ item, index }) => <TaskItem item={item} index={index} />}
                keyExtractor={(item, index) => {
                    return index
                }}
            />
        </View>
    )
}

// Style
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    textTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'blue',
        marginBottom: 10
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
})
export default Task
```
### Screen Shot of Validation
![Screenshot_2023-11-24-00-13-44-108_host exp exponent](https://github.com/maainul/FullStackThings/assets/37740006/7f5b7756-935d-4dfe-bae5-a16cd6688ffe)
![Screenshot_2023-11-24-00-14-10-519_host exp exponent](https://github.com/maainul/FullStackThings/assets/37740006/2c7c5f2f-0ddf-43b3-ab34-9521138e989f)

## Show and Hide Modal 

### Custom Button :
```js
import { View, Text, Button } from 'react-native'
import React from 'react'

const CustomBtn = ({ btnMethod, title }) => {
    return (
        <View>
            <Button onPress={btnMethod} title={title} />
        </View>
    )
}


export default CustomBtn
```

### Task
```js
import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import TaskItem from './components/TaskItem';
import AddTask from './components/AddTask';
import CustomBtn from './components/CustomBtn';

const Task = () => {

    const [showModal, setShowModal] = useState(false)
    const [taskList, setTaskList] = useState([]);

    // add tasks button
    const handleAddTaskButton = (task) => {
        setTaskList((prevTask) => (
            [...prevTask,
            { task: task, id: Math.random().toString() }
            ]));
        handleHideModal();
    }
    // handle delete 
    const handleDelete = (id) => {
        setTaskList((currentList) => currentList.filter(t => t.id !== id));
    }

    // Show Modal
    const handleShowModal = () => {
        setShowModal(true)
    }

    // Hide Modal
    const handleHideModal = () => {
        setShowModal(false)
    }


    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <AddTask
                    handleHideModal={handleHideModal}
                    handleAddTaskButton={handleAddTaskButton}
                    visible={showModal}
                />
                <CustomBtn btnMethod={handleShowModal} title="Add Task" />
            </View>
            <View>
                <Text style={styles.border}></Text>
                {taskList.length > 0 ? (
                    <Text style={styles.textTitle}>Your Task : </Text>
                ) : (
                    <Text style={styles.textTitle}>No task availabe</Text>
                )}
            </View>
            <FlatList
                data={taskList}
                renderItem={({ item, index }) => <TaskItem item={item} index={index} handleDelete={handleDelete} />}
                keyExtractor={(item, index) => {
                    return index
                }}
            />
        </View>
    )
}

// Style
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    textTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'blue',
        marginBottom: 10
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
})
export default Task
```
### AddTask
```js
import { View, TextInput, Text, StyleSheet, Button, Alert, Modal } from 'react-native'
import React, { useState } from 'react'
import CustomBtn from './CustomBtn';

const AddTask = ({ handleAddTaskButton, handleHideModal, visible }) => {
    const [task, setTask] = useState('');

    // handle input Value
    const handleInputValue = (inputTask) => {
        setTask(inputTask);

    }

    const addTask = () => {
        // validation . No empty task should not be added
        if (!task) {
            return Alert.alert("Please add task !")
        }
        handleAddTaskButton(task)
    }



    return (
        <Modal animationType='slide' visible={visible}>
            <View style={styles.inputContainer}>
                <Text style={styles.heading}>Insert Your Task</Text>
                <TextInput
                    onChangeText={handleInputValue}
                    style={styles.inputBox}
                    placeholder='Add your tasks'
                />
                <View style={styles.btnGroup}>
                    <View style={styles.btn}>
                        <CustomBtn btnMethod={addTask} title='Add' />
                    </View>
                    <View style={styles.btn}>
                        <CustomBtn btnMethod={handleHideModal} title='Cancel' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

// Style
const styles = StyleSheet.create({
    inputContainer: {

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 22,
        borderBottomWidth: 2,
        marginBottom: 10,
        borderColor: '#764ABC',
        textTransform: 'capitalize',
        marginTop: 10,
        fontWeight: '700',
        color: '#764ABC'

    },
    inputBox: {
        width: '85%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        paddingLeft: 15
    },
    btnGroup: {
        flexDirection: 'row',
        marginTop: 20,

    },
    btn: {
        width: '40%',
        marginHorizontal: 10,
        borderRadius: 20
    }
})

export default AddTask
```
## React Navigation :

```js
import Task from './src/Task';
import Home from './src/components/Home';
import Profile from './src/components/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator()


export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
          {
            headerMode: 'screen',
            headerTintColorL: 'white',
            headerStyle: { backgroundColor: 'tomato' }
          }
        }
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Awesome app'
          }}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{
            title: 'My Profile',
          }}
        />
        <Stack.Screen
          name='Task'
          component={Task}
          options={{
            title: 'My Tasks'
          }}

        />
      </Stack.Navigator >
    </NavigationContainer>

  );
}
```