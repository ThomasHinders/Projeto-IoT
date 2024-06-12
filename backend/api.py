import serial
import requests
import time

# Configuração da porta serial
ser = serial.Serial('COM4', 9600)  # Substitua 'COM4' pela porta correta onde seu Arduino está conectado

def read_from_serial():
    while True:
        try:
            if ser.in_waiting > 0:
                line = ser.readline().decode('utf-8').rstrip()
                print(f"Leitura do Arduino: {line}")
                
                # Enviar dados para a API
                response = requests.post('http://localhost:5000/api/data', json={'value': line})
                print(f"Resposta da API: {response.status_code}")
        except Exception as e:
            print(f"Erro: {e}")

        time.sleep(1)

if __name__ == "__main__":
    read_from_serial()
