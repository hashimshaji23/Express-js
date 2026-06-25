import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uplodes')
    },
    filename: (req, file, cb) => {
        let name = file.originalname.replace(/\s\s+/g, ' ');
        name = name.replace(/[&\/\\#, +()$~%'":=*?<>{}@-]/g, '_');
        cb(null, Date.now()+""+name)
    }
})

const fileFilterconfig = (req, file, cb) =>{
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/pneg"
    ){
        cb (null, true)
    } else {
        cb(new Error("only png jpg jpeg allowed"), false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilterconfig
})

export default upload