import React from 'react'
import { Fragment } from 'react'

const List = (list) => {



	const status = list.listDetails.completed;
	if(status === true){
		return (
			<Fragment>
				<tr>
							<td>
								{list.listDetails.id}
							</td>
							<td>
								{list.listDetails.title}
							</td>
							<td className="complete">
								Complete
							</td>

						</tr>

			</Fragment>
		)
	}else{
		return (
			<Fragment>
				<tr>
							<td>
								{list.listDetails.id}
							</td>
							<td>
								{list.listDetails.title}
							</td>
							<td className="pending">
								Pending
							</td>

						</tr>

			</Fragment>
		)
	}



}

export default List
