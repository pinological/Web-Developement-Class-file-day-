from pypresence import Presence
import time
import random

client_id = "793715342144176138"
RPC = Presence(client_id)

RPC.connect()
RPC.update(pid=7640, state="In Game", large_image="cyberpunk", small_image="cyberpunk", large_text="cyberpunk")

while True:
    
    RPC.update(details="In game time : 19:0"+str(random.randint(1,9)) ,large_image="jau_nepal", small_image="jau_nepal", large_text="jau_nepal")
    time.sleep(2)