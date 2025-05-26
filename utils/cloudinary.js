const cloudinary = require('cloudinary').v2;
const fs=require('fs');

 

const uploadOnCloudinary=async (localFilePath) => {
    cloudinary.config({ 
        cloud_name:process.env.CLOUD_NAME, 
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });
    try{
       if(!localFilePath)
        return null;
    const response=await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto",
        folder:"shooper_image_upload"
    })
    // file has been uploaded successfully
    console.log("file is uploaded on cloudinary ",response.url);
    fs.unlinkSync(localFilePath);
     return response;
     
    }
    catch(error){
    console.error("Cloudinary upload error:", error);
    if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
    }
    return null;
}
}

module.exports= uploadOnCloudinary;