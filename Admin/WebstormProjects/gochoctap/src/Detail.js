import React from 'react';
export default function Detail() {
    const center = {
        lat: 59.95,
        lng:30.33
    }
    const zoom =16;
    return (
        <section className="section main">
            <div className="container">
                <article className="content">
                    <div className="body-content">
                        <div style={{width:"1000px",height:"500px"}}>
                            <GoogleMap center={center} zoom={zoom}
                                       bootstrapURLKeys="AIzaSyCaj0mHlR-keu-9hsR6d-gB0L9BclG04rk"/>
                        </div>
                        <h1>Đây là 1 bài báo hay</h1>
                        <img src="imgs/iphone_x_64gb_3.jpg" height={600} width={600} />
                    </div>
                </article>
                <aside className="sidebar">
                    <div className="block black-block">
                        <p>Noi dung 1</p>
                        <p>Noi dung 2</p>
                        <p>Noi dung 3</p>
                        <p>Noi dung 4</p>
                    </div>
                    <div className="block">
                        <p>Noi dung 1</p>
                        <p>Noi dung 2</p>
                        <p>Noi dung 3</p>
                        <p>Noi dung 4</p>
                    </div>
                    <div className="block">
                        <p>Noi dung 1</p>
                        <p>Noi dung 2</p>
                        <p>Noi dung 3</p>
                        <p>Noi dung 4</p>
                    </div>
                </aside>
            </div>
        </section>

    )
}