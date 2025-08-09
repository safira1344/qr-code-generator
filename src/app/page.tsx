"use client"

import {QRCodeCanvas} from 'qrcode.react';

export default function Home() {
	return (
		<main className="container">
			<section className="title-container">
				<h1 className="page-title">
					Gere e customize QR Codes <span>dinâmicos</span>  
				</h1>

				<img 
					src="/arrow.svg"
					alt="detail"
					className="arrrow-detail" 
				/>
			</section>

			<section className="qr-code-container">
				<div className="qr-code">
					<div className="link-input">
						<label htmlFor="link">
							Digite seu link
						</label>
						<input 
							type="text"
							id="link"
							placeholder="Seu link aqui"	
						/>
				</div>

					<div className="qr-code-preview">
						<p>
							QR Code Preview 
						</p>

						<QRCodeCanvas
							value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
							title={""}
							size={200}
							bgColor={"#ffffff"}
							fgColor={"#000000"}
							imageSettings={{
								src: "https://static.zpao.com/favicon.png",
								x: undefined,
								y: undefined,
								height: 24,
								width: 24,
								opacity: 1,
								excavate: true,
							}}
						/>
					</div>
				</div>

				<div className="qr-code-customization">
					<div className="customization-container">
						<h3>
							Cores
						</h3>

						<div className='input-container'>
							<div className='input-box'>
								<label htmlFor="">
									Cor Principal
								</label>
							</div>
						</div>
					</div>

					<div className="customization-container">
						
					</div>

					<button className='download-button'>
						Baixar QR Code
					</button>
				</div>
			</section>
		</main>
	);
}
