import expoChannel from '../expoChannel/expoChannel';

type ILogger = (log: any) => void;

const logger: ILogger = (log) => {
  if (expoChannel() === 'development')
    console.log('--------LOGGER--------\n', log, '\n--------LOGGER--------');
};
export default logger;
