import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
// import SimpleReactFileUpload from './SimpleReactFileUpload';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                    id: "0",
                    description: "beautiful landscape",
                    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                    "3919321_1443393332_n.jpg"
                }, {
                    id: "1",
                    description: "Aliens???",
                    imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
                    "08323785_735653395_n.jpg"
                }, {
                    id: "2",
                    description: "On a vacation!",
                    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                }, {
                    id: "3",
                    description: "AnubhavOfficial",
                    imageLink: "https://anubhavcse08.github.io/anubhavpro/image/anubhavofficial.jpg"
                }, {
                    id: "4",
                    description: " The Sunseting",
                    imageLink: "https://avatars.mds.yandex.net/get-pdb/51720/d76454fd-f728-4e76-bad0-5ade73207fa7/orig"
                }, {
                    id: "5",
                    description: "Evening Time",
                    imageLink: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350"
                }, {
                    id: "6",
                    description: "Background Music",
                    imageLink: "http://image.zhuatu.com/Design//BackGround-1920-1200/BackGround_GP@DaTuKu.org.jpg"
                }]
        }
        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(postRemove) {
        console.log(postRemove.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemove)
        }))
    }

    render() {
        return <div>
            <Title title="Big Photowall"/>
            <PhotoWall photoWallPost={this.state.posts} onRemovePhoto={this.removePhoto}/>
        </div>
    }
}
export default Main