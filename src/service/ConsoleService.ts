const figlet = require('figlet');
const chalk = require('chalk');

// eslint-disable-next-line no-console
const output = console.log;

/**
 * Console service for output messages
 */
export const ConsoleService = {
    /**
     *
     * @param message string message
     * @return formatted string message for console as title
     */
    getTitle: async (message: string): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            figlet(message, { horizontalLayout: 'fitted' }, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },

    /**
     * @return logger
     */
    getLogger: () => {
        return {
            debug: (message?: any) => output(`${chalk.bold.gray(message)}`),
            title: (message?: any) => output(`${chalk.bold.blue(message)}`),
            info: (message?: any) => output(`${chalk.white(message)}`),
            info2: (message?: any) => output(chalk.gray(message)),
            success: (message?: any) => output(`\n${chalk.bold.green(message)}`),
            // eslint-disable-next-line no-console
            error: (message?: any) => console.error(`${chalk.bold.red(message)}`),
        };
    },
};
