/* UntilMaintenanceEnds v1.0 */
/* 아래 TIME 상수의 값을 변경하여, 점검 종료 시각을 설정하십시오. */
const TIME = new Date('2024-02-06T05:00:00Z');

TIME.setHours(TIME.getHours() - 9);

function getMinutes() {
    const now = new Date();
    const m = Math.round((TIME - now) / 60000);
    const sm = m.toString();
    if (m<=120) {
      return sm + '분';
    }
    return Math.floor(sm/60).toString() + '시간 ' + (sm - 60 * Math.floor(sm/60)).toString() + '분'
}

const widget = new ListWidget();

widget.backgroundColor = new Color('1C1C1E');
const title = widget.addText('점검 종료까지');
title.font = Font.title3();
title.color = Color.white();

widget.addSpacer(10);

const time = widget.addText(getMinutes());
time.font = new Font('AppleSDGothicNeo-Medium', 35)
time.color = Color.white();

widget.presentSmall();
