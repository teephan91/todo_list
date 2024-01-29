import { projectCountStorage } from "./create_todo";

export default function updateTodoCount(project) {
    return project + '_' +(projectCountStorage.find((el) => el.project === project)['count'])++;
}
