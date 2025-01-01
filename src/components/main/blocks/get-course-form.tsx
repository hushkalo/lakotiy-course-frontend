import { zodResolver } from "@hookform/resolvers/zod";
import { TFunction } from "i18next";
import { useState, type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Spinner } from "@/components/common/spinner.tsx";
import { managerLink, typeMessenger } from "@/components/contants";
import {
  registerUserSchemas,
  type TRegisterUserSchemas,
} from "@/components/main/schema/register-user.schemas.ts";
import { Button } from "@/components/ui/button.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { api } from "@/lib/api.ts";
import { cn } from "@/lib/utils.ts";

const getStatusOrder = (
  status: "success" | "reject",
  t: TFunction,
  setResponse: Dispatch<SetStateAction<boolean>>
) => {
  const statusContent = {
    success: {
      img: "/assets/main/get-course/success.svg",
      text: t("self-educate.get-course.blocks.block2.success"),
    },
    reject: {
      img: "/assets/main/get-course/reject.svg",
      text: t("self-educate.get-course.blocks.block2.reject"),
    },
  };

  return (
    <div className="flex items-center justify-center lg:w-[48.4%]">
      <div className="flex flex-col items-center justify-center">
        <img src={statusContent[status].img} alt="" className="w-max" />
        <p className="w-[87%] pt-[31px] text-center">
          {statusContent[status].text}
        </p>
        <Button
          className="mt-[62px] h-auto w-full rounded-xl px-10 py-5 text-center text-[22px] lg:w-max"
          onClick={() => setResponse(false)}
        >
          {t("self-educate.get-course.blocks.block2.button-ok")}
        </Button>
      </div>
    </div>
  );
};

export function GetCourseForm() {
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);
  const [isResponse, setResponse] = useState(false);
  const [statusError, setStatusError] = useState<"success" | "reject">(
    "success"
  );
  const form = useForm<TRegisterUserSchemas>({
    resolver: zodResolver(registerUserSchemas),
    defaultValues: {
      firstName: "",
      messengerType: undefined,
      messenger: "",
      email: "",
      phone: "",
      isAgreeWithRules: false,
    },
    mode: "onBlur",
  });

  async function onSubmit(values: TRegisterUserSchemas) {
    setLoading(true);
    try {
      const { isAgreeWithRules, phone, ...rest } = values;
      await api
        .post("course/create", { json: { ...rest, phone: `+380${phone}` } })
        .json();
      setStatusError("success");
    } catch (error) {
      setStatusError("reject");
      console.error(error);
    } finally {
      setResponse(true);
      setLoading(false);
    }
  }

  return isResponse ? (
    getStatusOrder(statusError, t, setResponse)
  ) : (
    <div className="relative lg:w-[48.4%]">
      <div className="absolute z-10 flex h-full w-full items-center justify-center rounded bg-black/80 text-2xl text-white">
        <p>Незабаром буде доступна</p>
      </div>
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <Input
                        placeholder={t(
                          "self-educate.get-course.blocks.block2.form.firstName.placeholder"
                        )}
                        className="peer w-full border-b-2 border-none bg-inherit p-0 font-normal outline-none md:text-lg"
                        {...field}
                      />
                      <Separator
                        className={cn(
                          "mt-4 bg-[#5A61F0] peer-focus:bg-custom-black",
                          {
                            "bg-destructive peer-focus:bg-destructive":
                              form.formState.errors.firstName,
                          }
                        )}
                      />
                    </>
                  </FormControl>
                  <FormMessage isAbsolute className="text-base" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <Input
                        placeholder={t(
                          "self-educate.get-course.blocks.block2.form.email.placeholder"
                        )}
                        className="peer w-full border-b-2 border-none bg-inherit p-0 font-normal outline-none md:text-lg"
                        {...field}
                      />
                      <Separator
                        className={cn(
                          "mt-4 bg-[#5A61F0] peer-focus:bg-custom-black",
                          {
                            "bg-destructive peer-focus:bg-destructive":
                              form.formState.errors.email,
                          }
                        )}
                      />
                    </>
                  </FormControl>
                  <FormMessage isAbsolute className="text-base" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <div className="relative">
                        <p className="absolute top-1/2 -translate-y-1/2">
                          +380
                        </p>
                        <Input
                          placeholder={t(
                            "self-educate.get-course.blocks.block2.form.phone.placeholder"
                          )}
                          maxLength={9}
                          className="peer w-full border-b-2 border-none bg-inherit p-0 pl-10 font-normal outline-none md:text-lg"
                          {...field}
                          onChange={(e) => {
                            const result = e.target.value.replace(/\D/g, "");
                            field.onChange(result);
                          }}
                        />
                      </div>
                      <Separator
                        className={cn(
                          "mt-4 bg-[#5A61F0] peer-focus:bg-custom-black",
                          {
                            "bg-destructive peer-focus:bg-destructive":
                              form.formState.errors.phone,
                          }
                        )}
                      />
                    </>
                  </FormControl>
                  <FormMessage isAbsolute className="text-base" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="messengerType"
              render={({ field }) => (
                <FormItem>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <>
                        <SelectTrigger className="border-none p-0 md:text-base">
                          <SelectValue
                            placeholder={t(
                              "self-educate.get-course.blocks.block2.form.messenger.placeholder"
                            )}
                          />
                        </SelectTrigger>
                        <Separator
                          className={cn(
                            "mt-4 bg-[#5A61F0] peer-focus:bg-custom-black",
                            {
                              "bg-destructive peer-focus:bg-destructive":
                                form.formState.errors.messenger,
                            }
                          )}
                        />
                      </>
                    </FormControl>
                    <SelectContent>
                      {typeMessenger.map((item, index) => (
                        <SelectItem key={index} value={item}>
                          {t(
                            `self-educate.get-course.blocks.block2.form.messenger.types.${item}`
                          )}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage isAbsolute className="text-base" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="messenger"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <>
                      <Input
                        placeholder={t(
                          `self-educate.get-course.blocks.block2.form.messenger.${form.watch("messengerType")}`
                        )}
                        className="peer w-full border-b-2 border-none bg-inherit p-0 font-normal outline-none md:text-lg"
                        {...field}
                      />
                      <Separator
                        className={cn(
                          "mt-4 bg-[#5A61F0] peer-focus:bg-custom-black",
                          {
                            "bg-destructive peer-focus:bg-destructive":
                              form.formState.errors.messenger,
                          }
                        )}
                      />
                    </>
                  </FormControl>
                  <FormMessage isAbsolute className="text-base" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isAgreeWithRules"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className={cn(
                          "mt-1 size-5 border-2 border-custom-black",
                          {
                            "border-destructive":
                              form.formState.errors.isAgreeWithRules,
                          }
                        )}
                      />
                      <p
                        className={cn("w-[87%] text-lg font-normal lg:w-full", {
                          "text-gray-400":
                            form.formState.errors.isAgreeWithRules,
                        })}
                      >
                        <span
                          className={cn({
                            "text-destructive":
                              form.formState.errors.isAgreeWithRules,
                          })}
                        >
                          {t(
                            "self-educate.get-course.blocks.block2.form.isAgreeWithRules.content"
                          )}
                        </span>
                        <a
                          href="/terms"
                          target="_blank"
                          className="underline underline-offset-2"
                        >
                          {t(
                            "self-educate.get-course.blocks.block2.form.isAgreeWithRules.link"
                          )}
                        </a>
                      </p>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="button" // поемнять не забыть
              className="mt-[52px] flex h-16 w-full items-center rounded-xl bg-[#5A61F0] px-10 py-5 text-lg font-semibold lg:max-w-[250px] lg:text-[22px]"
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner />
              ) : (
                t("self-educate.get-course.blocks.block2.button")
              )}
            </Button>
          </form>
        </Form>
        <p className="mb-9 mt-10 text-lg font-normal leading-tight text-black lg:hidden">
          {t("self-educate.get-course.blocks.block1.body.content")}
        </p>
        <a
          href={managerLink}
          target="_blank"
          rel="noreferrer"
          className="w-max text-[22px] font-semibold text-default-gradient-to underline underline-offset-2 transition-colors hover:text-default-gradient-from lg:hidden"
        >
          {t("self-educate.get-course.blocks.block1.body.link")}
        </a>
      </div>
    </div>
  );
}
