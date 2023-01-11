import { updateItem, putItem } from "./dynamoHandler.mjs"

export const handler = async(event) => {
    const updateSuccess = await updateItem(event)

    if (!updateSuccess) {
        await putItem(event)
    }
};
