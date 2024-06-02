from datetime import datetime, timedelta
import io
import json
import random
import threading
import time
import chardet
import cv2
import mss
import pyautogui
import requests
from PIL import Image
import numpy as np
import easyocr

def send_tg_photo(mss_img):
    class ImageConvert(io.BytesIO):
        "假的保存"
        def write(self,data):
            if not hasattr(self,"data"):
                self.data = b""
            self.data += data
    def get_data(img,quality=95):
        bio = ImageConvert()
        bio.name = "temp.jpg"#确保时jpg格式，temp这个可以改
        pil = Image.new("RGB",img.size)
        pil.frombytes(img.rgb)
        pil.save(bio,quality=quality)#默认最高质量
        del img,pil
        return bio.data
    TOKEN = '6720887060:AAFu_k2G9QH-_FSr9ZvOTT3FfRHUQ74YLbU'
    CHAT_ID = '5955543529'
    URL = f"https://api.telegram.org/bot{TOKEN}/sendPhoto"


    # 发送图片的数据
    payload = {
        'chat_id': CHAT_ID,
    }
    files = {
        'photo': get_data(mss_img)
    }

    # 发送POST请求
    response = requests.post(URL, data=payload, files=files)

    # 检查是否成功
    if response.status_code == 200:
        print("TG图片发送成功")
    else:
        print("TG图片发送失败，状态码:", response.status_code)



def send_tg_message(msg):
    # 替换以下TOKEN和CHAT_ID为你的Bot的Token和要发送消息的聊天ID
    TOKEN = '6720887060:AAFu_k2G9QH-_FSr9ZvOTT3FfRHUQ74YLbU'
    CHAT_ID = '5955543529'
    URL = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
    # 发送信息的数据
    payload = {
        'chat_id': CHAT_ID,
        'text': msg,
    }
    # 发送POST请求
    response = requests.post(URL, json=payload)
    # 检查是否成功
    if response.status_code == 200:
        print("TG消息发送成功")
    else:
        print("TG消息发送失败")

def match_img_v2(template_path, img, threshold, result_list, index):
    template = cv2.imread(template_path)
    h, w = template.shape[:-1]

    # 进行模板匹配
    res = cv2.matchTemplate(img, template, cv2.TM_CCOEFF_NORMED)

    # 获取所有匹配度高于阈值的位置
    locations = np.where(res >= threshold)
    locations = list(zip(*locations[::-1]))  # 将结果转换为(x, y)坐标列表

    if locations:
        # 随机选择一个匹配结果
        random_choice = random.choice(locations)
        top_left = random_choice
        bottom_right = (top_left[0] + w, top_left[1] + h)
        random_x = random.randint(top_left[0], bottom_right[0])
        random_y = random.randint(top_left[1], bottom_right[1])

        result_list[index] = [random_x, random_y, w, h]
    else:
        result_list[index] = []


# 创建线程类
class MatchThread(threading.Thread):
    def __init__(self, semaphore, template_path, img, threshold, result_list, index):
        threading.Thread.__init__(self)
        self.semaphore = semaphore
        self.template_path = template_path
        self.img = img
        self.threshold = threshold
        self.result_list = result_list
        self.index = index

    def run(self):
        self.semaphore.acquire()
        try:
            match_img_v2(self.template_path, self.img, self.threshold, self.result_list, self.index)
        finally:
            self.semaphore.release()

def get_stop_time():
    while True:
        try:
            current_time = datetime.now()
            day_hour_str = input("请输入停止时间 (格式为 MMdd HH | H): ")
            if len(day_hour_str) == 1:
                delay_time = timedelta(int(day_hour_str))
                return current_time + delay_time
            else:
                day_hour = datetime.strptime(day_hour_str, "%m%d %H")
                return datetime(day=day_hour.year, month=day_hour.month, day=day_hour.day, hour=day_hour.hour)

        except ValueError as e:
            print("输入错误，请重新输入")


def load_config(config_name):
    def get_encoding(file_path):
        """
        获取文件编码格式
        :param file_path: 文件路径
        :return: 编码格式
        """
        with open(file_path, 'rb') as f:
            return chardet.detect(f.read())['encoding']

    try:
        # 读取配置文件
        # gbk编码文件
        with open(config_name, encoding=get_encoding(config_name)) as f:
            config = json.load(f)
    except FileNotFoundError:
        # 使用默认配置
        config = {
            "json_id": "WARNING ----------------------------外部配置文件访问失败 ----------------------------------WARNING",
        }

    return config


reader = easyocr.Reader(['en'])


cap = mss.mss()
def grab_screen_mss(monitor):
    return cv2.cvtColor(np.array(cap.grab(monitor)), cv2.COLOR_BGRA2BGR)


def captureAreaText(left, top, width=70, height=30):
    img1 = grab_screen_mss(monitor={'left': left, 'top': top, 'width': width, 'height': height})
    text1 = reader.readtext(img1, detail = 0)
    if len(text1) > 0:
        return text1[0]
    else:
        return ''

def move_and_click(pos, duration=0.2, timeout=0.2):
    pyautogui.moveTo(pos[0], pos[1], duration=duration, tween=pyautogui.easeInOutQuad)
    pyautogui.click()
    time.sleep(timeout)