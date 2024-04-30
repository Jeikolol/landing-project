import { ModeNightRounded, WbSunnyRounded } from '@mui/icons-material'
import { Box, Button, PaletteMode } from '@mui/material'

interface Props {
	mode: PaletteMode
	toggleColorMode: () => void
}

function ToggleColorMode({ mode, toggleColorMode }: Readonly<Props>) {
	return (
		<Box sx={{ maxWidth: '32px' }}>
			<Button
				variant="text"
				onClick={toggleColorMode}
				size="small"
				aria-label="toggle theme"
				sx={{ minWidth: '32px', height: '32px', p: '4px' }}>
				{mode === 'dark' ? (
					<WbSunnyRounded fontSize="small" />
				) : (
					<ModeNightRounded fontSize="small" />
				)}
			</Button>
		</Box>
	)
}

export default ToggleColorMode
