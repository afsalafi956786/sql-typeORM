const MODELS = require('../models')

exports.postDatas =async (req,res)=>{
    try{
           
        const { title,content,imageUrl,categroyId,userId } = req.body

        if(!title){
            return res.status(400).json({ message:"Please enter title"})
        }
        if(!content){
            return res.status(400).json({ message:"Please enter content"})
        }
        if(!imageUrl){
            return res.status(400).json({ message:"Please enter image"})
        }
        if(!categroyId){
            return res.status(400).json({ message:"Please enter categoryid"})
        }
        
        if(!userId){
            return res.status(400).json({ message:"Please enter userId"})
        }

        const newPost =await  MODELS.Post.create({
            title,
            content,
            imageUrl,
            categroyId,
            userId
        })

        return res.status(201).json({
            message: "Post created successfully",
            data: newPost
        });

    }catch(error){
        console.log(error.message)
        return res.status(500).json({
            message: "Server error",
        });
    }
}


exports.getPosts =async (req,res)=>{
    try{

        const { postId }  = req.params;

        const posts =await MODELS.Post.findByPk(postId);

        if (!posts) {
            return res.status(404).json({ message: 'Post not found' });
        }

        return res.status(200).json({posts})

        
    }catch(error){
        return res.status(500).json({ message:'Server error'})
    }
}

exports.getAllPosts = async (req,res)=>{
    try{

       const posts = await  MODELS.Post.findAll();
       if(!posts){
        return res.status(404).json({ message: 'Post not found' });
       }

       return res.status(200).json({ posts })

    }catch(error){
        return res.status(500).json({ message:'Server error'}) 
    }
}



exports.updatePost  = async (req,res)=>{
    try{
         
        const { postId } = req.params;
        const { title,content,imageUrl,categroyId,userId } = req.body

        MODELS.Post.update( {
            title: title,
            content: content,
            imageUrl: imageUrl,
            categoryId: categroyId,
            userId: userId
        },{ where : { id: postId } })


        return res.status(200).json({ message: 'Post updated successfully' });

    }catch(error){
        return res.status(500).json({ message:'Server error'}) 
    }

}
 

exports.deletePost = async (req,res)=>{
    try{

        const { postId } = req.params;
        MODELS.Post.destroy({ where:{ id:postId }})
        return res.status(200).json({ message:'Post deleted successfully'})


    }catch(error){
        return res.status(500).json({ message:'Server error'}) 
    }
}
