import {
	Box,
	Typography,
	Paper,
	MobileStepper,
	Button,
	Container,
	Stack,
} from '@mui/material'
import { useTheme } from '@mui/system'

import { darkLogos, whiteLogos } from '../data/skills'
import { useState } from 'react'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

function Skills() {
	const theme = useTheme()
	const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos
	const [activeStep, setActiveStep] = useState(0)
	const maxSteps = logos.length

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleStepChange = (step: number) => {
		setActiveStep(step)
	}

	return (
		<Box
			id="skills"
			sx={{
				pt: { xs: 4, sm: 12 },
				pb: { xs: 8, sm: 16 },
				color: 'white',
				bgcolor: '#1B4655',
			}}>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Box
					sx={{
						width: { sm: '100%', md: '60%' },
						textAlign: { sm: 'left', md: 'center' },
					}}>
					<Typography
						component="h2"
						variant="h4">
						Highlights
					</Typography>
					<Typography
						variant="body1"
						sx={{ color: 'grey.400' }}>
						Explore why our product stands out: adaptability, durability,
						user-friendly design, and innovation. Enjoy reliable customer
						support and precision in every detail.
					</Typography>
				</Box>
			</Container>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					pt: { xs: 10, sm: 20 },
					pb: { xs: 8, sm: 12 },
				}}>
				<Stack
					spacing={2}
					useFlexGap
					sx={{ width: { xs: '100%', sm: '70%' } }}>
					<Paper
						square
						elevation={0}
						sx={{
							display: 'flex',
							alignItems: 'center',
							height: 50,
							pl: 2,
							bgcolor: 'Background.default',
						}}>
						<Typography
							component="p"
							variant="subtitle2"
							align="center"
							color="text.secondary">
							{logos[activeStep].label}
						</Typography>
					</Paper>
					<AutoPlaySwipeableViews
						axis="x"
						index={activeStep}
						onChangeIndex={handleStepChange}
						enableMouseEvents>
						{logos.map((logo, index) => (
							<div key={logo.src}>
								{Math.abs(activeStep - index) <= 2 ? (
									<Box
										component="img"
										sx={{
											height: '100%',
											display: 'block',
											maxWidth: 400,
											overflow: 'hidden',
											width: '100%',
										}}
										src={logo.src}
										alt={logo.label}></Box>
								) : null}
							</div>
						))}
					</AutoPlaySwipeableViews>
					<MobileStepper
						variant="dots"
						steps={maxSteps}
						position="static"
						activeStep={activeStep}
						nextButton={
							<Button
								size="small"
								onClick={handleNext}
								disabled={activeStep === maxSteps - 1}>
								Next
								<KeyboardArrowRight />
							</Button>
						}
						backButton={
							<Button
								size="small"
								onClick={handleBack}
								disabled={activeStep === 0}>
								<KeyboardArrowLeft />
								Back
							</Button>
						}></MobileStepper>
				</Stack>
			</Container>
		</Box>
	)
}

export default Skills
