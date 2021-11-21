import React,{useState, useEffect} from 'react'
import { Fragment } from 'react'
import List from './List';

const Todolist = () => {
	const [todo, settodo] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then(response => response.json())
			.then(data => {
				let dataLimit = data.slice(0,20);
				settodo(dataLimit);
			});


	}, [])
	return (
		<Fragment>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>
							User ID
						</th>
						<th>
							Task Name
						</th>
						<th>
							Task Status
						</th>
					</tr>
				</thead>
				<tbody>
					{
						todo.map(data=><List listDetails = {data}></List>)
					}

				</tbody>
			</table>

		</Fragment>
	)
}

export default Todolist
