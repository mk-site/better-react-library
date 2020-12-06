module.exports = {
	plugins:{
		'postcss-url': {
            url: 'inline'
		},
		'postcss-nested': {},
		'postcss-preset-env': {
			features: {
				'color-mod-function': { unresolved: 'warn' },
				'nesting-rules': true
			},
			insertBefore: {},
			autoprefixer: { grid: true }
		},
		'cssnano': {
			safe: true
		}
	}
}
