const multer = require('multer')
const path = require('path')

const multerStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folderImagePath = path.join(__dirname, '..', '..', 'public', 'imagesPath')
    callback(null, folderImagePath)
  },
  filename: (req, file, callback) => {
    const extensionImage = path.extname(file.originalname)
    const finalImageName = `${Date.now()}${extensionImage}`
    callback(null, finalImageName)
  }
})

const imagesPath = multer({ storage: multerStorage })

module.exports = imagesPath