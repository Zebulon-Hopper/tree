import { useState } from 'react';
import './App.css';

const tree = {
	folder: [
		{
			file: 'file',
			folder: [
				{
					file: 'file',
				},
			],
		},
		{
			file: 'file',
			folder: [
				{
					file: 'file',
				},
				{
					file: 'file',
				},
			],
		},
		{
			
			folder: [
				{
					file: 'file',
          
					folder: [
						{
							file: 'file',
							folder: [
								{
									file: 'file',
									folder: [
										{
											file: 'file',
										},
									],
								},
							],
						},
				
            
					],
       
				},
			],
		},
	],
};

function Entry({ file, folder, depth }) {
  const [isExpanded, setIsExpanded] = useState(false)
	return (
		<div>
      {folder ? (<button className='button' onClick={()=>setIsExpanded(!isExpanded)}>
      {isExpanded? '-' : '+'} folder
			 
      </button>):( <div className='file'>{file}</div>)}
 
      {isExpanded && (<div style={{ paddingLeft: `${depth + 10}px` }}>
				{folder?.map((entry, i) => (
					<Entry key={i} {...entry} depth={depth + 4} />
				))}
			</div>)}
	
		</div>
	);
}

function App() {
	return (
		<div className='App'>
			{tree.folder.map((entry, i) => (
				<Entry key={i} {...entry} depth={1} />
			))}
		</div>
	);
}

export default App;

