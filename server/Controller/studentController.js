const student = require("../Model/studentsModel")

const addStudent = async (req, res) => {
    try {
        console.log(req.body)
        const { name,
            Language1,
            English,
            Maths,
            Science,
            Social,
            classD } = req.body
        if (!name || !Language1 || !English || !Maths || !Science || !Social || !classD) {
            return res.status(200).send({ message: "Field cannot be empty", success: false })
        }

        const saveData = new student(req.body)
        await saveData.save()
        return res.status(200).send({ message: "Field cannot be empty", success: true })

    } catch (error) {
        console.log(error)
    }

}

const getStudentsDetails = async(req,res)=>{
    try {

        const studentsData = await student.find()
        res.status(200).send({message:"done", success:true, data:studentsData})
    } catch (error) {
        console.log(console.error());
    }
}

const getastudent = async(req,res)=>{
    try {
        
        console.log('hahahah');
        const id = req.params.id
        const studentsData = await student.findOne({_id:id})

        console.log(studentsData)
        res.status(200).send({message:"done", success:true, data:studentsData})
    } catch (error) {
        console.log(console.error());
    }
}

module.exports = {
    addStudent,
    getStudentsDetails,
    getastudent
}