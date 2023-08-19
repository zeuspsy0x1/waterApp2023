import { useState } from 'react'
import './App.css'

interface FloorState {
	cleaningServices: number
	water: number
	m2: number
}

function App() {
	const [totalCleaningServices, setTotalCleaningServices] = useState<number>(0)
	const [m2, setM2] = useState<number>(0)
	const [totalWater, setTotalWater] = useState<number>(0)
	const [floorOne, setFloorOne] = useState<FloorState>({ cleaningServices: 0, water: 0, m2: 0 })
	const [floorTwo, setFloorTwo] = useState<FloorState>({ cleaningServices: 0, water: 0, m2: 0 })
	const [floorThree, setFloorThree] = useState<FloorState>({ cleaningServices: 0, water: 0, m2: 0 })

	const calculateValues = () => {
		const floorOneM2 = floorOne.m2
		const floorTwoM2 = floorTwo.m2
		const sumOfM2 = floorOneM2 + floorTwoM2
		const floorThreeM2 = m2 - sumOfM2

		setFloorThree((prev) => ({ ...prev, m2: floorThreeM2 }))

		const percentageWaterFloorOne = (floorOneM2 * totalWater) / m2
		const percentageWaterFloorTwo = (floorTwoM2 * totalWater) / m2
		const percentageWaterFloorThree = (floorThreeM2 * totalWater) / m2

		setFloorOne((prev) => ({ ...prev, water: percentageWaterFloorOne }))
		setFloorTwo((prev) => ({ ...prev, water: percentageWaterFloorTwo }))
		setFloorThree((prev) => ({ ...prev, water: percentageWaterFloorThree }))
	}

	return (
		<>
			<div className=''>
				<div className='text-center display-5 fw-bold text-white'>Dividir recibo</div>
				<br />
				<br />
				<form
					onSubmit={(e) => {
						e.preventDefault()
					}}>
					<div className='input-group mb-3 '>
						<span className='input-group-text' id='basic-addon1'>
							Total Aseo:
						</span>
						<input
							type='number'
							className='form-control bg-dark text-white'
							placeholder='0'
							aria-label='Username'
							aria-describedby='basic-addon1'
							onChange={(e) => {
								e.preventDefault()
								setTotalCleaningServices(parseInt(e.target.value))
							}}
						/>
						<br />
						<br />
					</div>
					<div className='input-group mb-3'>
						<span className='input-group-text' id='basic-addon1'>
							Total Agua:
						</span>
						<input
							type='number'
							className='form-control bg-dark text-white'
							placeholder='0'
							aria-label='Username'
							aria-describedby='basic-addon1'
							onChange={(e) => {
								e.preventDefault()
								setTotalWater(parseInt(e.target.value))
							}}
						/>
					</div>

					<div className='input-group mb-3'>
						<span className='input-group-text' id='basic-addon1'>
							Total Metros:
						</span>
						<input
							type='number'
							className='form-control bg-dark text-white'
							placeholder='0'
							aria-label='Username'
							aria-describedby='basic-addon1'
							onChange={(e) => {
								e.preventDefault()
								setM2(parseInt(e.target.value))
							}}
						/>
					</div>

					<div className='input-group mb-3'>
						<span className='input-group-text' id='basic-addon1'>
							Piso 1 Metros
						</span>
						<input
							type='number'
							className='form-control bg-dark text-white'
							placeholder='0'
							aria-label='Username'
							aria-describedby='basic-addon1'
							onChange={(e) => {
								e.preventDefault()
								setFloorOne((prev) => ({ ...prev, m2: parseInt(e.target.value) }))
							}}
						/>
					</div>

					<div className='input-group mb-3'>
						<span className='input-group-text' id='basic-addon1'>
							Piso 2 Metros:
						</span>
						<input
							type='number'
							className='form-control bg-dark text-white'
							placeholder='0'
							aria-label='Username'
							aria-describedby='basic-addon1'
							onChange={(e) => {
								e.preventDefault()
								setFloorTwo((prev) => ({ ...prev, m2: parseInt(e.target.value) }))
							}}
						/>
					</div>

					<br />
					<br />
					<div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
						<button
							onClick={() => {
								calculateValues()
							}}
							type='submit'
							className='btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold'>
							Calcular
						</button>
					</div>
					<br />
					<br />

					<div className='container px-4 fw-bold d-grid gap-3 d-sm-flex justify-content-sm-center text-white'>
						<div className='row'>
							<div className='col lg'>
								<div className='text-left'> Piso 1: </div>
								<div>Cleaning Services: {Math.ceil(totalCleaningServices / 3)}</div>
								<div>Water: {Math.ceil(floorOne.water)}</div>
								<div className='fs-4 text-danger text-center'>
									Total: <br />
									{Math.ceil(floorOne.water + totalCleaningServices / 3)}
								</div>
							</div>
							<div className='col'>
								Piso 2:
								<div>Cleaning Services: {Math.ceil(totalCleaningServices / 3)}</div>
								<div>Water: {Math.ceil(floorTwo.water)}</div>
								<div className='fs-4 text-danger text-center'>
									Total: <br />
									{Math.ceil(floorTwo.water + totalCleaningServices / 3)}
								</div>
							</div>
							<div className='col'>
								Piso 3:
								<div>Cleaning Services: {Math.ceil(totalCleaningServices / 3)}</div>
								<div>Water: {Math.ceil(floorThree.water)}</div>
								<div className='fs-4 text-danger text-center'>
									Total: <br />
									{Math.ceil(floorThree.water + totalCleaningServices / 3)}
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default App
