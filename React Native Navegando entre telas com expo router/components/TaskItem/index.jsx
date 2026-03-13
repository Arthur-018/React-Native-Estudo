import { Pressable, Text, View } from "react-native"
import { IconCheck, IconPencil, IconTrash } from "../Icons"

const TaskItem = ({
    completed,
    text,
    onToggleComplete,
    onPressEdit,
    onPressDelete
}) => {
    return (
        <View>
            <Pressable onPress={onToggleComplete}> <IconCheck completed={completed} />

            </Pressable>
            <Text>
                {text}
            </Text>
            <Pressable onPress={onPressEdit}>
                <IconPencil />
            </Pressable>
            <Pressable onPress={onPressDelete}>
                <IconTrash />
            </Pressable>
        </View>

    )
}


export default TaskItem