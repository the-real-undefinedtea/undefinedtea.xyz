/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,md,svelte,ts,vue}'],
	theme: {
		fontFamily: {
      content: ['IBM Plex Sans Condensed', 'sans-serif'],
      code: ['IBM Plex Mono', 'monospace']
    },
		extend: {
			colors: {
				content: '#333333',

        white: '#ffffff',
        black: '#000000',

        error: '#d32f2f'
      },
			fontSize: {
        'tiny': '.5rem',
        '9xl': '7.75rem',
        '11xl': '11rem',
        'single': '1.35rem'
      },
      lineHeight: {
        '_': '1.75rem'
      }
		},
    typography: (theme) => ({
      invert: {
        css: {
          '--tw-prose-body': 'var(--tw-prose-invert-body)',
          '--tw-prose-heading': 'var(--tw-prose-invert-heading)',
          '--tw-prose-to': 'var(--tw-prose-invert-to)',
          '--tw-prose-to_': 'var(--tw-prose-invert-to_)',
          '--tw-prose-code': 'var(--tw-prose-invert-code)',
          '--tw-prose-code_': 'var(--tw-prose-invert-code_)',
          '--tw-prose-pre': 'var(--tw-prose-invert-pre)',
          '--tw-prose-pre_': 'var(--tw-prose-invert-pre_)',
          '--tw-prose-pre-border': 'var(--tw-prose-invert-pre-border)',
          '--tw-prose-counter': 'var(--tw-prose-invert-counter)',
          '--tw-prose-bullet': 'var(--tw-prose-invert-bullet)',
          '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
          '--tw-prose-quote-border': 'var(--tw-prose-invert-quote-border)'
        }
      },
      DEFAULT: {
        css: {
          '--tw-prose-body': theme('colors.zinc.700'),
          '--tw-prose-heading': theme('colors.zinc.900'),
          '--tw-prose-to': theme('colors.zinc.700'),
          '--tw-prose-to_': theme('colors.yellow.300 / 0.5'),
          '--tw-prose-code': theme('colors.zinc.700'),
          '--tw-prose-code_': theme('colors.yellow.300 / 0.7'),
          '--tw-prose-pre': theme('colors.zinc.100'),
          '--tw-prose-pre_': theme('colors.zinc.700 / 0.7'),
          '--tw-prose-pre-border': 'transparent',
          '--tw-prose-counter': theme('colors.zinc.700'),
          '--tw-prose-bullet': theme('colors.zinc.700'),
          '--tw-prose-hr': theme('colors.zinc.100'),
          '--tw-prose-quote-border': theme('colors.zinc.300'),

          '--tw-prose-invert-body': theme('colors.zinc.300'),
          '--tw-prose-invert-heading': theme('colors.zinc.100'),
          '--tw-prose-invert-to': theme('colors.zinc.300'),
          '--tw-prose-invert-to_': theme('colors.yellow.300 / 0.5'),
          '--tw-prose-invert-code': theme('colors.zinc.700'),
          '--tw-prose-invert-code_': theme('colors.yellow.300 / 0.7'),
          '--tw-prose-invert-pre': theme('colors.zinc.700'),
          '--tw-prose-invert-pre_': theme('colors.zinc.100 / 0.7'),
          '--tw-prose-invert-pre-border': theme('colors.zinc.100 / 0.1'),
          '--tw-prose-invert-counter': theme('colors.zinc.300'),
          '--tw-prose-invert-bullet': theme('colors.zinc.300'),
          '--tw-prose-invert-hr': theme('colors.zinc.700'),
          '--tw-prose-invert-quote-border': theme('colors.zinc.500'),

          color: 'var(--tw-prose-body)',
          lineHeight: theme('lineHeight.7'),

          p: {
            marginTop: theme('spacing.7'),
            marginBottom: theme('spacing.7')
          },

          'h2, h3': {
            color: 'var(--tw-prose-heading)',
            fontWeight: theme('fontWeight.medium')
          },
          h2: {
            fontSize: theme('fontSize.xl')[0],
            lineHeight: theme('lineHeight.7'),
            marginTop: theme('spacing.15'),
            marginBottom: theme('spacing.3')
          },
          h3: {
            fontSize: theme('fontSize.base')[0],
            lineHeight: theme('lineHeight.7'),
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.3')
          },
          ':is(h2, h3) + *': {
            marginTop: 0
          },

          a: {
            position: 'relative',
            'z-index': '1',
            color: 'var(--tw-prose-to)',
            fontWeight: theme('fontWeight.medium')
          },
          'a::after': {
            content: '""',
            position: 'absolute',
            top: 'auto', right: '0px', bottom: '-3px', left: '0px',
        
            height: '3px',
        
            background: 'var(--tw-prose-to_)',
            transition: 'all .3s ease-in-out',
            'z-index': '-1'
          },
          'a:hover::after': {
            height: '9px'
          },

          code: {
            display: 'inline-flex',
            color: 'var(--tw-prose-code)',
            fontFamily: 'IBM Plex Mono',
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.medium'),
            backgroundColor: 'var(--tw-prose-code_)',
            borderRadius: theme('borderRadius.md'),
            paddingLeft: theme('spacing.1'),
            paddingRight: theme('spacing.1')
          },
          'a code': {
            color: 'inherit'
          },
          ':is(h2, h3) code': {
            fontWeight: theme('fontWeight.bold')
          },

          pre: {
            color: 'var(--tw-prose-pre)',
            fontFamily: 'IBM Plex Mono',
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.medium'),
            backgroundColor: 'var(--tw-prose-pre_)',
            borderRadius: theme('borderRadius.3xl'),
            padding: theme('spacing.7'),
            overflowX: 'auto',
            border: '1px solid',
            borderColor: 'var(--tw-prose-pre-border)'
          },
          'pre code': {
            display: 'inline',
            color: 'inherit',
            fontFamily: 'IBM Plex Mono',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            backgroundColor: 'transparent',
            borderRadius: 0,
            padding: 0
          },

          blockquote: {
            paddingLeft: theme('spacing.6'),
            borderLeftWidth: theme('borderWidth.2'),
            borderLeftColor: 'var(--tw-prose-quote-border)',
            fontStyle: 'italic'
          },

          ul: {
            listStyleType: 'disc'
          },
          ol: {
            listStyleType: 'decimal'
          },
          'ul, ol': {
            paddingLeft: theme('spacing.5')
          },
          li: {
            marginTop: theme('spacing.5'),
            marginBottom: theme('spacing.5'),
            paddingLeft: theme('spacing[3.5]')
          },
          'li::marker': {
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.medium')
          },
          'ol > li::marker': {
            color: 'var(--tw-prose-counter)'
          },
          'ul > li::marker': {
            color: 'var(--tw-prose-bullet)'
          },
          'li :is(ol, ul)': {
            marginTop: theme('spacing.5'),
            marginBottom: theme('spacing.5')
          },
          'li :is(li, p)': {
            marginTop: theme('spacing.3'),
            marginBottom: theme('spacing.3')
          },

          hr: {
            marginTop: theme('spacing.9'),
            marginBottom: theme('spacing.9'),
            borderTopWidth: '1px',
            borderColor: 'var(--tw-prose-hr)',
            '@screen md': {
              marginLeft: `calc(${theme('spacing.12')} * -1)`,
              marginRight: `calc(${theme('spacing.12')} * -1)`,
            }
          },

          img: {
            borderRadius: theme('borderRadius.3xl')
          }
        }
      }
    })
	},
	plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'class'
}
