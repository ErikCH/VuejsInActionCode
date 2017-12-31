
import axios from 'axios'

export default function ( {params, store} ) {
  return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
        .then((response) => {
            store.commit('add', response.data.results)
            //  console.log(response.data.results);
        });
}
