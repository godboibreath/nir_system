from datetime import datetime

def log(message):
    log_file = open('logs.log', 'a', encoding='UTF-8')
    print(f'Log[{datetime.now()}]: {message}')
    log_file.write(f'Log[{datetime.now()}]: {message}')
    log_file.close()