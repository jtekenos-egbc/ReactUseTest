import {useState, use} from 'react';
import { fetchDataPromise } from './Fetch';

  interface Post {
    id: number;
    title: string;
    body: string;
  }

export const DataTable =() => {

    const [data, setData] = useState<Post[]>([]);

    const dataPromise = fetchDataPromise('https://jsonplaceholder.typicode.com/posts');
    
    setData(use(dataPromise));

    console.log("dataPromise", dataPromise);
    console.log("data", data);

    return (
        <> 
        <h1>Data Table</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}