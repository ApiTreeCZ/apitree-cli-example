#!/usr/bin/env node
import yargs from 'yargs';
import { ConsoleService } from './service';

const MAIN_CMD = 'at-example';
const TITLE = 'ApiTree CLI';

const log = ConsoleService.getLogger();

enum Command {
    CREATE = 'create',
    UPDATE = 'update',
}

const run = async (command: Command, args: { [appArgs: string]: unknown }) => {
    log.title(await ConsoleService.getTitle(TITLE));

    switch (command) {
        case Command.CREATE:
            log.info(`Create awesome application with name: ${args.name}`);
            return;
        case Command.UPDATE:
            log.info('Update awesome application');
            return;
        default:
            throw new Error(`Command not implement yet`);
    }
};

yargs
    .usage(TITLE)
    .command({
        command: Command.CREATE,
        describe: 'Create awesome application',
        aliases: 'c',
        builder: (builder) => builder.options({ name: { type: 'string', demandOption: true, alias: 'n' } }),
        handler: async (args) => {
            await run(Command.CREATE, args);
        },
    })
    .command({
        command: Command.UPDATE,
        describe: 'Update awesome application',
        aliases: 'u',
        handler: async (args) => {
            await run(Command.UPDATE, args);
        },
    })
    .example(Command.CREATE, `${MAIN_CMD} ${Command.CREATE} --name awesome-app`)
    .example(Command.UPDATE, `${MAIN_CMD} ${Command.UPDATE}`)
    .demandCommand(1, 1)
    .showHelpOnFail(true)
    .epilog('ApiTree software')
    .strict().argv;
