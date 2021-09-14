import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer KcsDsnus9k9pv3PDdAJhIMUomA1lVVoxCpxVOwilfJEUIdC6t06KCdNTNXF-87YrMsVij6tSia6n9Hdj_kegxL0jUPcyO979qoNzPxt9Drfy07Jyxi41OE_R_bw4YXYx'
    }
})