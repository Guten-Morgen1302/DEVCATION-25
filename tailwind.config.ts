import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
        neon: {
          blue: 'hsl(var(--neon-blue))',
          purple: 'hsl(var(--neon-purple))',
          pink: 'hsl(var(--neon-pink))',
          cyan: 'hsl(var(--neon-cyan))',
          yellow: 'hsl(var(--neon-yellow))',
        }
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		container: {
  			center: true,
  			padding: {
  				DEFAULT: '1rem',
  				sm: '2rem',
  				lg: '4rem',
  				xl: '5rem',
  				'2xl': '6rem'
  			},
  			screens: {
  				sm: '640px',
  				md: '768px',
  				lg: '1024px',
  				xl: '1280px',
  				'2xl': '1536px'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
        'glitch': {
          '0%': {
            transform: 'translate(0)'
          },
          '1%': {
            transform: 'translate(-2px, 2px)'
          },
          '2%': {
            transform: 'translate(2px, -2px)'
          },
          '3%': {
            transform: 'translate(0)'
          },
          '10%': {
            transform: 'translate(0)'
          },
          '11%': {
            transform: 'translate(-1px, -1px)'
          },
          '12%': {
            transform: 'translate(1px, 1px)'
          },
          '13%': {
            transform: 'translate(0)'
          },
          '100%': {
            transform: 'translate(0)'
          }
        },
        'float': {
          '0%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 10px hsla(var(--neon-blue) / 0.5), 0 0 20px hsla(var(--neon-blue) / 0.3)'
          },
          '50%': {
            opacity: '0.7',
            boxShadow: '0 0 20px hsla(var(--neon-blue) / 0.8), 0 0 30px hsla(var(--neon-blue) / 0.5)'
          }
        },
        'scanline': {
          '0%': {
            transform: 'translateY(-100%)'
          },
          '100%': {
            transform: 'translateY(100%)'
          }
        },
        'cyberpunk-background': {
          '0%': {
            backgroundPosition: '0% 0%'
          },
          '50%': {
            backgroundPosition: '100% 100%'
          },
          '100%': {
            backgroundPosition: '0% 0%'
          }
        },
        'number-change': {
          '0%': {
            content: '0'
          },
          '100%': {
            content: 'attr(data-value)'
          }
        },
        'text-shimmer': {
          '0%': {
            backgroundPosition: '-100%'
          },
          '100%': {
            backgroundPosition: '200%'
          }
        }
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        'glitch': 'glitch 5s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scanline': 'scanline 2s linear infinite',
        'cyberpunk-background': 'cyberpunk-background 15s ease infinite',
        'number-change': 'number-change 2s ease-out forwards',
        'text-shimmer': 'text-shimmer 4s ease-in-out infinite'
  		},
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'neon-grid': 'linear-gradient(rgba(10, 10, 30, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 10, 30, 0.8) 1px, transparent 1px)',
        'cyberpunk-gradient': 'linear-gradient(135deg, hsl(var(--neon-purple)) 0%, hsl(var(--neon-blue)) 50%, hsl(var(--neon-cyan)) 100%)',
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
