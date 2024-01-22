import data from './Data'
const StudentCard = ({onClose, visible,selectedStudentId}) => {

	const details = data.find((item)=>item.id === selectedStudentId)
	const subjects = Object.keys(details).filter((key) => key !== "id" && key !== "name" && key !== "class");
	const marks = subjects.map((subject) => details[subject]);
	const totalMark = marks.reduce((acc, mark) => acc + mark, 0)
	const averageMark = totalMark / subjects.length;
	const highestMark = Math.max(...marks);
	const lowestMark = Math.min(...marks);


	

    if (!visible) return null
  return (
    <div id="container"
        className=" fixed inset-0 backdrop-blur-xl w-screen h-screen  flex justify-center items-center z-50 transition ease-in-out duration-700"  >
		  <div className="flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
         <button onClick={onClose}><span class="material-symbols-outlined">
close
</span></button>


<div className='flex justify-between'> 

	<h2 className="text-2xl font-semibold">{details.name}</h2>
	<h2 className="text-2xl font-semibold">Class : {details.class}</h2>
</div>
	
	<div className="pt-4 space-y-2">
		<div>
			<div className="flex justify-between">
				<span>Total mark</span>
				<span>{totalMark}</span>
			</div>
			
		</div>
		<div className="flex justify-between">
			<span>Avarage Mark</span>
			<span>{averageMark}</span>
		</div>
	</div>

	<div className="pt-4 space-y-2">
		<div className="flex justify-between">
			<span>Highest Mark</span>
			<span>{highestMark}</span>
		</div>
		<div className="flex flex-col">
			<div className="flex justify-between">
				<span>Lowest mark</span>
				<span>{lowestMark}</span>
			</div>
		</div>
	
	</div>
</div>
         


    </div>
  )
}

export default StudentCard