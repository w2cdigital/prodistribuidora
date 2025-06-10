import MyButton from "components/My/Button"
import MyCheckbox from "components/My/Checkbox"
import MyBreadcrumb from "components/My/Breadcrumb"
import MyColorPicker from "./ColorPicker"
import MyTextField from "./TextField"
import MySelect from "./Select"
import MyComboBox from "./ComboBox"
import MySwitch from "./Switch"
import MyTooltip from "./Tooltip"
import MyNumberField from "./NumberField"
import MyDatePicker from "./DatePicker"
import MyDialog from "./Dialog"
import MyMonthPicker from "./MonthPicker"
import MyTimeField from "./TimeField"
import MyMenuButton from "./Menu"
import MyAcordeon from "./Acordeon"
import MyPopover from "./Popover"
import MyTable from "./Table"
import MyCard from "./Card"
import MyFormError from "./FormError"
import MyTagSelector from "./TagSelector"
import MyEmojiPicker from "./EmojiPicker"
import MyImageFile from "./ImageFile"
import MyConfirmDialog from "./ConfirmDialog"
import { useListActions, useListData } from "./List/actions"
function My() {
  return null
}
My.Checkbox = MyCheckbox
My.Breadcrumb = MyBreadcrumb
My.ColorPicker = MyColorPicker
My.TextField = MyTextField
My.NumberField = MyNumberField
My.Switch = MySwitch
My.DatePicker = MyDatePicker
My.Dialog = MyDialog
My.MonthPicker = MyMonthPicker
My.TimeField = MyTimeField
My.Acordeon = MyAcordeon
My.Button = MyButton
My.Select = MySelect
My.ComboBox = MyComboBox
My.Tooltip = MyTooltip
My.Menu = MyMenuButton
My.Popover = MyPopover
My.Table = MyTable
My.Card = MyCard
My.useList = useListActions
My.useListData = useListData
My.FormError = MyFormError
My.TagSelector = MyTagSelector
My.EmojiPicker = MyEmojiPicker
My.ImageFile = MyImageFile
My.ConfirmDialog = MyConfirmDialog

export default My
