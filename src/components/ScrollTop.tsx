import { KeyboardArrowUp } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'

function ScrollTop() {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)
	}, [])

	return (
		<div className="scroll-to-top">
			{isVisible && (
				<IconButton>
					<Button onClick={scrollToTop}>
						<KeyboardArrowUp />
					</Button>
				</IconButton>
			)}
		</div>
	)
}

export default ScrollTop
