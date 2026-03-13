import { View, Text } from "react-native";
import TaskItem from "../../components/TaskItem";

export default function AddTask() {
    return (
        <View>
            <Text>
                Adicionar uma tarefa
            </Text>
            <TaskItem 
                completed
                text={"Estudar React"}
            />
            <TaskItem 
                text={"Estudar React Native"}
            />
        </View>
    );
}
