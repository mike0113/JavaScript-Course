# ws_json.py
import os
import argparse
import asyncio
from websockets.asyncio.server import serve
from websockets import ConnectionClosed
import json

PORT=11129     # Suppose your student_id is 1123210xx
students = []

async def reply(websocket):
    async for message in websocket:
        obj = json.loads(message)
        students.append([obj["name"], obj["height"], 0])
        students.sort(key=lambda x: x[1], reverse=True)
        students[0][2] = 1
        for i in range(1, len(students)):
            if students[i][1] == students[i-1][1]:
                students[i][2] = students[i-1][2]
            else:
                students[i][2] = i+1
        html = '<table border=1>\n'
        for student in students:
            html += '<tr><td>{}</td><td>{}</td><td>{}</td></tr>'.format(
                student[0], student[1], student[2])
        html += '</table>'
        s = json.dumps({"rank": html})
        await websocket.send(s)

async def main(port):
    async with serve(reply, "lilina.csie.ncnu.edu.tw", port):
        await asyncio.get_running_loop().create_future()  # run forever

if __name__ == '__main__':
    print("Starting WebSocket Server ...")
    logname = os.environ.get('LOGNAME')
    if not logname is None and logname[0:2] == 's1':
        PORT = int(logname[1:4]+logname[8:10])
    parser = argparse.ArgumentParser(description='WebSocket Server')
    parser.add_argument('-p', metavar='PORT', type=int, default=PORT,
                        help=f'WebSocket port (default {PORT})')
    args = parser.parse_args()
    asyncio.run(main(args.p))