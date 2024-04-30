import './App.css'
import {
	Box,
	CssBaseline,
	PaletteMode,
	ThemeProvider,
	ToggleButton,
	ToggleButtonGroup,
	createTheme,
} from '@mui/material'
import ButtonAppBar from './components/ButtonAppBar'
import ScrollTop from './components/ScrollTop'
import getLPTheme from './theme'
import React from 'react'
import { AutoAwesomeRounded } from '@mui/icons-material'
import Skills from './components/Skills'
import Hero from './components/Hero'

interface Props {
	showCustomTheme: boolean
	toggleCustomTheme: () => void
}

function ToggleCustomTheme({
	showCustomTheme,
	toggleCustomTheme,
}: Readonly<Props>) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100dvw',
				position: 'fixed',
				bottom: 24,
			}}>
			<ToggleButtonGroup
				color="primary"
				exclusive
				value={showCustomTheme}
				onChange={toggleCustomTheme}
				aria-label="Platform"
				sx={{
					backgroundColor: 'background.default',
					'& .Mui-selected': {
						pointerEvents: 'none',
					},
				}}>
				<ToggleButton value>
					<AutoAwesomeRounded sx={{ fontSize: '20px', mr: 1 }} />
					Custom theme
				</ToggleButton>
				<ToggleButton value={false}>Material Design 2</ToggleButton>
			</ToggleButtonGroup>
		</Box>
	)
}

function App() {
	const [mode, setMode] = React.useState<PaletteMode>('light')
	const [showCustomTheme, setShowCustomTheme] = React.useState(true)
	const LPtheme = createTheme(getLPTheme(mode))
	const defaultTheme = createTheme({ palette: { mode } })

	const toggleColorMode = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
	}

	const toggleCustomTheme = () => {
		setShowCustomTheme((prev) => !prev)
	}

	return (
		<ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
			<CssBaseline />
			<ButtonAppBar
				mode={mode}
				toggleColorMode={toggleColorMode}></ButtonAppBar>
			<Hero />
			<Box sx={{ bgcolor: 'Background.default' }}>
				<Skills />
			</Box>
			<ToggleCustomTheme
				showCustomTheme={showCustomTheme}
				toggleCustomTheme={toggleCustomTheme}
			/>
			<ScrollTop />
		</ThemeProvider>
	)
}

export default App
