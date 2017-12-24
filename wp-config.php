<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'andreviallonportoflio2018');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'zexBMPsRne8{A ?L #5):`@LCuDN[e6AxJqW-_2T_7XB;=h!]R2bW3`=(<,fB]AY');
define('SECURE_AUTH_KEY',  ']*k.&V+yJ?ZKa2.&v(A0eE>~CxC_^/R@/ja|/[,/CJq/J(o}@Q)q~Ot=&g_$oT1&');
define('LOGGED_IN_KEY',    '1BuqZbi~OBjSEJ7{/RFFz%W%C*MQF+^y$s~r<iwB9( 1*Qk1CM=-oH3N_b9}p3$F');
define('NONCE_KEY',        ':|.3}wJ`*0C7CyY`=C@& a6^edVqd8m;J]^HZc9%dl1YAzfSQDo[C&ff.<DO@0?>');
define('AUTH_SALT',        'SqEw/:p(uIifMB:#iR)pf7JaI_kwIm+yWl|eoa?N%[Np^cS;h2m7uU3a%/9Cv0Aj');
define('SECURE_AUTH_SALT', '|Vwm7wWQbbWkeWD97<qib8Vc~!_cBJ&,6Lhjjp_p) |D2K]}O4B/sPw*#$HkWwjn');
define('LOGGED_IN_SALT',   'aEv?v)XeVaO=ytW^]OSQ*paUP;-+sAQ5a|#@%_e_.bire,,.K{fqqIBs#5a}v(?&');
define('NONCE_SALT',       'N5Z1Fe;fX,N7nb}5F#^9E-m9`C;ok/^EHf-{y>/b<!xb[o^.Gpk#&]thSkX$Km^@');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'G';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
