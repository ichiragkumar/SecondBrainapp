import Content from "../models/ContentModel";


export const deleteContent = async (req:any, res:any) => {
    try{
        const { id } = req.query;

        if(!id){
            res.status(400).send({message: "Content id is required"});
            return;
        }
        
        const content = await Content.findById(id);

        if(!content){
            res.status(404).send({message: "Content not found"});
            return;
        }

        if(req.userId !== content.userId){
            res.status(401).send({message: "You are not authorized to delete this content"});
            return;
        }
        content.isActive = false;

        await content.save();
        res.status(200).send({message: "Content deleted successfully"});
        return;
    } catch (error) {
        res.status(500).send({message: "Internal server error"});
    }   
}